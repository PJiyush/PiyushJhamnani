const commands = ["projects", "about", "resume", "clear", "project-details"];

export default function useAutocomplete() {
    return (input: string) => {
        const match = commands.find((cmd) => cmd.startsWith(input));
        return match || input;
    };    
}
