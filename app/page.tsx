"use client"
import React, { useEffect, useState} from "react";
import Terminal from "./components/terminal";
import Profile from "./components/profile";

export default function Home() {
  const [nightMode, setNightMode] = useState(true);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-6");
      setTimeout(() => {
        el.classList.add("transition-all", "duration-1000", "opacity-100", "translate-y-0");
      }, 200);
    });
  }, []);


  return (
    <div className={`${nightMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"} relative flex flex-col min-h-screen p-6 overflow-hidden transition-all duration-500`}>
      
      <button 
        onClick={() => setNightMode(!nightMode)}
        className="absolute top-4 right-4 px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition-all">
        {nightMode ? "Light Mode" : "Night Mode"}
      </button>

      <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-12">

        <Profile nightMode={nightMode} />

        <Terminal />
      </div>

    </div>
  );
}
