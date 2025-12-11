import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";
interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string | StaticImageData;
}

export default function ProjectCard({ title, description, tech, github, image }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row gap-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
    >
      <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg">
        {/* <img src={image} alt={title} className="w-full h-full object-cover" /> */}
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          width={600}
          height={400}
        />
      </div>

      
      <div className="flex flex-col justify-between w-full md:w-2/3">
        <div>
          <h3 className="text-3xl font-bold mb-2">{title}</h3>
          <p className="opacity-80 mb-4 leading-relaxed text-base">{description}</p>

          
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-600/20 text-blue-600 border hover:text-blue-400 border-blue-500/20 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <a
          href={github}
          target="_blank"
          className="inline-block mt-4 px-5 py-2 rounded-xl bg-slate-600 text-white shadow hover:bg-slate-800 transition-all w-fit"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
}
