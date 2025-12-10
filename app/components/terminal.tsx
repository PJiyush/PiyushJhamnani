"use client"
import { useState, useEffect, useRef } from "react";
import React from "react";

function Terminal() {
    console.log("Terminal rendered...");
    const commands = ["projects", "about", "resume", "clear", "project-details"];
    const [terminalOutput, setTerminalOutput] = useState(["Welcome to my portfolio terminal!", "Type 'projects', 'about', or 'resume' to learn more."]); 
    const [terminalInput, setTerminalInput] = useState("");
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(terminalRef.current) terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }, [terminalOutput]);

    const typeResponse = (response: string[]) => {
        // Add each line of the response to the terminal output with a slight delay
        let currentIndex = 0;
        
        const addNextLine = () => {
            if (currentIndex < response.length) {
                setTerminalOutput(prev => [...prev, response[currentIndex]]);
                currentIndex++;
                setTimeout(addNextLine, 50);
            }
        };
        
        addNextLine();
    };

    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (terminalInput.trim() !== "") {
                setCommandHistory(prev => [...prev, terminalInput]);
                setHistoryIndex(-1);
            }
            
            setTerminalOutput(prev => [...prev, `$ ${terminalInput}`]);
            
            switch (terminalInput.toLowerCase()) {
                case "projects":
                    const projectsResponse = [
                        "=== My Projects ===",
                        "",
                        "1. Portfolio Website",
                        "   • Technologies: Next.js, TypeScript, Tailwind CSS",
                        "   • Features: Interactive terminal, responsive design, dark mode",
                        "",
                        "2. Quizzing Platoform",
                        "   • Technologies: Vue, firebase, Vercel",
                        "   • Features: User authentication, State management",
                        "",
                        "3. TypeQuick",
                        "   • Technologies: React, TypeScript, TailwindCSS",
                        "   • Features: Typing speed test, Past history, State Management",
                        "",
                        "4. HashConsistent",
                        "   • Technologies: TypeScript",
                        "   • Features: System design, Consistent hashing",
                        "",
                        "Type 'project-details [number]' for more information about a specific project."
                    ];
                    typeResponse(projectsResponse);
                    break;
                case "about":
                    typeResponse(["I am a passionate engineer who loves solving problems with code. In my free time, I build web systems, explore system design, stay updated on machine learning algorithms, and enjoy solving mechanical problems using computational methods."]);
                    break;
                case "resume":
                    typeResponse(["Download my resume here: [Resume Link]"]);
                    break;
                case "clear":
                    setTerminalOutput([]);
                    setTerminalInput("");
                    return;
                default:
                    // Check if the command is asking for project details
                    if (terminalInput.toLowerCase().startsWith("project-details")) {
                        const projectNum = terminalInput.split(" ")[1];
                        handleProjectDetails(projectNum);
                    } else {
                        typeResponse(["Command not found. Try 'projects', 'about', or 'resume'."]);
                    }
            }
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

    const handleProjectDetails = (projectNum: string) => {
        switch (projectNum) {
            case "1":
                typeResponse([
                    "=== Portfolio Website ===",
                    "",
                    "This website showcases my skills and projects using modern web technologies.",
                    "",
                    "• Technologies: Next.js, TypeScript, Tailwind CSS",
                    "• Features:",
                    "  - Interactive terminal interface",
                    "  - Responsive design for all devices",
                    "  - Dark/light mode toggle",
                    "  - Animation and transition effects",
                    "",
                    "• GitHub: github.com/piyushjhamnani/portfolio",
                    "• Live Demo: https://piyush-jhamnani.vercel.app/",
                ]);
                break;
            case "2":
                typeResponse([
                    "=== Quizzing Platoform ===",
                    "",
                    "Creating a Quizzing platform for making and taking quizzes.",
                    "",
                    "• Technologies: Vue, firebase, Vercel",
                    "• Features:",
                    "  - Interactive quiz creation interface",
                    "  - User authentication",
                    "  - Dark/light mode toggle",
                    "",
                    "• GitHub: https://github.com/PJiyush/Quizzing",
                    "• Live Demo: https://quizzing-eta.vercel.app/",
                ]);
                break;
            case "3":
                typeResponse([
                    "=== TypeQuick ===",
                    "",
                    "Created a typing speed test application to help users improve their typing skills.",
                    "",
                    "• Technologies: React, TypeScript, TailwindCSS",
                    "• Features:",
                    "  - Randomized typing tests",
                    "  - real-time tracking of typing speed",
                    "  - Past history of typing tests",
                    "  - Dark/light mode toggle",
                    "",
                    "• GitHub: https://github.com/PJiyush/TypeQuick",
                    "• Live Demo: https://type-quick.vercel.app/",
                ]);
                break;
            case "4":
                typeResponse([
                    "=== HashConsistent ===",
                    "",
                    "This project implements a consistent hashing algorithm to distribute data across multiple nodes.",
                    "",
                    "• Technologies: TypeScript",
                    "• Features:",
                    "  - Consistent hashing algorithm implementation",
                    "  - Data distribution across nodes",
                    "",
                    "• GitHub: https://github.com/PJiyush/HashConsistent",
                ]);
                break;
            default:
                typeResponse(["Project number not found. Please choose a number between 1-4."]);
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

export default React.memo(Terminal)