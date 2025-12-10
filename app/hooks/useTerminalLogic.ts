"use client";
import { useState, useRef, useEffect } from "react";
import { runCommand } from "../commands/index";
import useTypeResponse from "./useTypeResponse";
import useCommandHistory from "./useCommandHistory";
import useAutocomplete from "./useAutoComplete";

export default function useTerminalLogic() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "Welcome to my portfolio terminal!",
    "Type 'projects', 'about', or 'resume' to know more.",
  ]);

  const terminalRef = useRef<HTMLDivElement>(null);
  const typeResponse = useTypeResponse(setTerminalOutput);
  const { pushHistory, handleArrowKeys } =
    useCommandHistory(terminalInput, setTerminalInput);

  const autocomplete = useAutocomplete();

  // Auto-scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (terminalInput.trim() !== "") {
        pushHistory(terminalInput);
      }

      setTerminalOutput((prev) => [...prev, `$ ${terminalInput}`]);

      runCommand(terminalInput, typeResponse, setTerminalOutput);
      setTerminalInput("");
    }

    // history navigation
    handleArrowKeys(e);

    // autocomplete
    if (e.key === "Tab") {
      e.preventDefault();
      setTerminalInput((prev) => autocomplete(prev));
    }
  };

  return {
    terminalInput,
    setTerminalInput,
    terminalOutput,
    terminalRef,
    handleCommand,
  };
}
