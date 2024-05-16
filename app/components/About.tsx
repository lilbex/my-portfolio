import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="relative flex items-center justify-center bg-gray-900 text-white h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-75"></div>
      <div className="relative z-10 p-8 text-center max-w-4xl">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/passport.jpeg"
            alt="Your Image"
            className="rounded-full border-4 border-white mb-4 w-40 h-40 object-cover"
          />
          <h1 className="text-5xl font-bold mb-2">Hello, I'm Elias Imokhai</h1>
          <p className="text-lg mb-4">Seasoned Software Engineer</p>
        </div>
        <p className="text-xl leading-relaxed mb-6">
          I am a highly skilled software engineer with extensive experience in back-end and front-end development. Proficient in Python, Django, Django Rest Framework, Node.js, Express, and a variety of databases including MySQL, PostgreSQL, and MongoDB. On the front end, I excel with React, Next.js, and Tailwind CSS, creating seamless and engaging user interfaces. I am also well-versed in cloud technologies, leveraging platforms such as AWS, Azure, and Google Cloud to build scalable and resilient applications. My passion lies in delivering elegant, efficient, and user-centric solutions.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default About;
