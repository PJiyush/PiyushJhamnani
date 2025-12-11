"use client";
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
// import { img } from "framer-motion/client";
import { sampleProjects } from "../projects";



export default function ParallaxProjects({ projects = sampleProjects }) {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -100]);
  const y2 = useTransform(scrollY, [0, 600], [0, -300]);

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-40"
      ></motion.div>

      <motion.div style={{ y: y1 }} className="relative z-10 w-full max-w-4xl py-16 px-6 space-y-10">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech || ["React", "Node.js"]}
            github={project.github}
            image={project.img}
          />
        ))}
      </motion.div>
    </div>
  );
}
