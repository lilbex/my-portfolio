'use client'

import React from 'react';
import { motion } from 'framer-motion';
import useInView from '../../hooks/useInView';
import Image from 'next/image';
interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A brief description of project one.",
    link: "#",
    image: "https://via.placeholder.com/400x300.png?text=Project+One" // Placeholder image
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    link: "#",
    image: "https://via.placeholder.com/400x300.png?text=Project+Two" // Placeholder image
  }
];

const Projects: React.FC = () => {
  const { inView, ref } = useInView();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-white text-center pt-28">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="mb-4 rounded-lg w-full h-48 object-cover"/>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">Learn more</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
