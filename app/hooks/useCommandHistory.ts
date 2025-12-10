"use client"
import { useState } from "react";

export default function useCommandHistory(
  terminalInput: string,
  setTerminalInput: (v: string) => void
) {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const pushHistory = (cmd: string) => {
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleArrowKeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp" && commandHistory.length > 0) {
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(newIndex);
      setTerminalInput(commandHistory[commandHistory.length - 1 - newIndex]);
    }

    if (e.key === "ArrowDown") {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setTerminalInput(commandHistory[commandHistory.length - historyIndex]);
      } else {
        setHistoryIndex(-1);
        setTerminalInput("");
      }
    }
  };

  return { historyIndex, commandHistory, pushHistory, handleArrowKeys };
}
