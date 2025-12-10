"use client";
import useTerminalLogic from "../hooks/useTerminalLogic";
import React from "react";

function Terminal() {
  const {
    terminalInput,
    setTerminalInput,
    terminalOutput,
    terminalRef,
    handleCommand,
  } = useTerminalLogic();

  return (
    <div className="relative flex-1 p-6 rounded-2xl shadow-lg bg-black text-green-400 top-16">
      <div ref={terminalRef} className="h-80 overflow-y-auto font-mono text-sm p-2">
        {terminalOutput.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      <div className="flex items-center mt-2">
        <span className="text-green-400">$</span>
        <input
          className="bg-transparent outline-none ml-2 w-full"
          value={terminalInput}
          onChange={(e) => setTerminalInput(e.target.value)}
          onKeyDown={handleCommand}
          autoFocus
        />
      </div>
    </div>
  );
}

export default React.memo(Terminal);
