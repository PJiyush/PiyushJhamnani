import { useEffect } from "react";

export const useFadeEffect = () =>{
    useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
        el.classList.add("opacity-0", "translate-y-6");
        setTimeout(() => {
            el.classList.add("transition-all", "duration-1000", "opacity-100", "translate-y-0");
        }, 400);
        });
    }, []);
}