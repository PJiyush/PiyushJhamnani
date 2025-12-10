"use client"
import React, {useState} from "react";
import Terminal from "./components/terminal";
import Profile from "./components/profile";
import { useFadeEffect } from "./hooks/useFadeEffect";

export default function Home() {
  const [nightMode, setNightMode] = useState(true);
  useFadeEffect()
  const themeEffect = nightMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900";
  return (
    <div className={`${themeEffect} relative flex flex-col min-h-screen p-6 overflow-hidden transition-all duration-500`}>
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
