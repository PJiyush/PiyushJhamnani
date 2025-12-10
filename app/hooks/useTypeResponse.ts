export default function useTypeResponse(
    setTerminalOutput: React.Dispatch<React.SetStateAction<string[]>>
    ) {
    return function typeResponse(lines: string[]) {
        let i = 0;

        const addNext = () => {
        if (i < lines.length) {
            setTerminalOutput((prev) => [...prev, lines[i]]);
            i++;
            setTimeout(addNext, 40);
        }
        };

        addNext();
    };
}
