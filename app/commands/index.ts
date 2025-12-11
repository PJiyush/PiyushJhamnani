import projects from "./projects";
import about from "./about";
import resume from "./resume";
import projectDetails from "./projectDetails";

export const runCommand = (
    command: string,
    typeResponse: (lines: string[]) => void,
    setTerminalOutput: (cb: string[]) => void
) => {
    const cmd = command.toLowerCase();

    if (cmd === "projects") return typeResponse(projects);
    if (cmd === "about") return typeResponse(about);
    if (cmd === "resume") return typeResponse(resume);
    if (cmd === "clear") return setTerminalOutput([]);

    if (cmd.startsWith("project-details")) {
        const id = cmd.split(" ")[1];
        return typeResponse(projectDetails(id));
    }

    return typeResponse(["Command not found."]);
};
