"use client"
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Terminal({scrollToProjects}) {
    const commands = ["projects", "about", "resume", "clear"];
    const [terminalOutput, setTerminalOutput] = useState(["Welcome to my portfolio terminal!", "Type 'projects', 'about', or 'resume' to learn more."]); 
    const [terminalInput, setTerminalInput] = useState("");
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isTyping, setIsTyping] = useState(false);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }, [terminalOutput]);

    const typeResponse = (response: string) => {
        setIsTyping(true);
        let index = 0;
        const interval = setInterval(() => {
            if (index < response.length) {
                setTerminalOutput(prev => [...prev.slice(0, -1), prev[prev.length - 1] + response[index]]);
                index++;
            } else {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 50);
    };

    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (terminalInput.trim() !== "") {
                setCommandHistory(prev => [...prev, terminalInput]);
                setHistoryIndex(-1);
            }
            let response = "";
            switch (terminalInput.toLowerCase()) {
                case "projects":
                    response = " Redirecting to projects page...";
                    setTimeout(scrollToProjects, 1000);
                    break;
                case "about":
                    response = " I am a passionate engineer who loves solving problems with code. In my free time, I build web systems, explore system design, stay updated on machine learning algorithms, and enjoy solving mechanical problems using computational methods.";
                    break;
                case "resume":
                    response = " Download my resume here: [Resume Link]";
                    break;
                case "clear":
                    setTerminalOutput([]);
                    setTerminalInput("");
                    return;
                default:
                    response = "Command not found. Try 'projects', 'about', or 'resume'.";
            }
            setTerminalOutput(prev => [...prev, `$ ${terminalInput}`, ""]);
            typeResponse(response);
            setTerminalInput("");
        } else if (e.key === "ArrowUp" && commandHistory.length) {
            const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
            setHistoryIndex(newIndex);
            setTerminalInput(commandHistory[commandHistory.length - 1 - newIndex]);
        } else if (e.key === "ArrowDown") {
            if (historyIndex > 0) {
                setHistoryIndex(historyIndex - 1);
                setTerminalInput(commandHistory[commandHistory.length - 1 - historyIndex]);
            } else {
                setHistoryIndex(-1);
                setTerminalInput("");
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            const matchingCommand = commands.find(cmd => cmd.startsWith(terminalInput));
            if (matchingCommand) setTerminalInput(matchingCommand);
        }
    };

    return (
        <div className="relative flex-1 p-6 rounded-2xl shadow-lg h-3/4 mt-6 md:mt-0 md:ml-6 w-full md:max-w-1/2 fade-in bg-black text-green-400 top-16 ">
            <div ref={terminalRef} className="h-80 overflow-y-auto font-mono text-sm p-2">
                {terminalOutput.map((output, index) => (
                    <div key={index}>{output}</div>
                ))}
            </div>
            <div className="flex items-center mt-2">
                <span className="text-green-400">$</span>
                <input
                    type="text"
                    className="bg-transparent border-none outline-none ml-2 w-full caret-green-400"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyDown={handleCommand}
                    autoFocus
                />
            </div>
        </div>
    );
}
