"use client";
import React from "react";
import { motion } from "framer-motion";
import useInView from "../../hooks/useInView";
import Image from "next/image";

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  logo: string;
  link: string;
}

const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Tech Company A",
    duration: "Jan 2021 - Present",
    description:
      "Working on building scalable web applications and leading a team of junior developers.",
    logo: "https://via.placeholder.com/100x100.png?text=Company+Logo", // Placeholder logo
    link: "https://www.companyA.com",
  },
  {
    role: "Software Engineer",
    company: "Tech Company B",
    duration: "Jan 2019 - Dec 2020",
    description:
      "Developed several backend services and contributed to frontend development using React.",
    logo: "https://via.placeholder.com/100x100.png?text=Company+Logo", // Placeholder logo
    link: "https://www.companyB.com",
  },
  // Add more experiences as needed
];

const Experience: React.FC = () => {
  const { inView, ref } = useInView();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-gray-100 text-center pt-28">
      <h2 className="text-4xl font-bold mb-8">Experience</h2>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-left flex"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image
              width={400}
              height={400}
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-16 h-16 mr-4"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">{experience.role}</h3>
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 mb-1 hover:underline"
              >
                {experience.company}
              </a>
              <p className="text-gray-500 mb-4">{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
