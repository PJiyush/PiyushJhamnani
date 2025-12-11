"use client";
import React, { useState } from "react";
import Terminal from "./components/terminal";
import Profile from "./components/profile";
import { useFadeEffect } from "./hooks/useFadeEffect";
import ParallaxProjects from "./components/ParallaxProjects";
import { motion } from "framer-motion";

export default function Home() {
  const [nightMode, setNightMode] = useState(true);
  useFadeEffect();
  React.useEffect(() => {
  setTimeout(() => {
        window.scrollTo({
          top: 150,  
          behavior: "smooth",
        });
      }, 800); 
    }, []);


  const themeEffect = nightMode
    ? "bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-200"
    : "bg-gradient-to-b from-gray-100 via-white to-gray-200 text-gray-900";

  return (
    <div className={`${themeEffect} relative flex flex-col min-h-screen overflow-hidden transition-all duration-700`}>
      <button
        onClick={() => setNightMode(!nightMode)}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition-all"
      >
        {nightMode ? "Light Mode" : "Night Mode"}
      </button>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-start justify-center gap-10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full md:w-[420px]">
            <Profile nightMode={nightMode} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className=" w-full relative top-12 md:w-[620px] min-h-[320px]">
            <Terminal />
          </div>
        </motion.div>
      </section>

      <div className="w-full h-32 bg-gradient-to-b from-transparent to-black/20 dark:to-white/5" />

      <section className="min-h-screen w-full">
        <ParallaxProjects />
      </section>
      <section className="py-32 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-6">Want to Know More?</h2>
        <p className="opacity-80 mb-8 max-w-xl">
          Here's my complete resume with experience, projects, and skills.  
        </p>

        <a
          href="https://drive.google.com/file/d/1XJ1qoUbmlk-4uRSIVPoaxUWHfdXTmPYj/view?usp=drive_link"
          target="_blank"
          className="px-8 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white shadow-xl transition-all text-lg font-semibold"
        >
          View Resume
        </a>
      </section>
    </div>
  );
}
