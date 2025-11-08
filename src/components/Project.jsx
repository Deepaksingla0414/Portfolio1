import React from 'react';
import { FaHtml5, FaReact, FaJs, FaCss3Alt, FaNodeJs, FaDatabase } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      name: 'WildGuards',
      description: 'A wildlife monitoring platform showcasing live data and tracking.',
      techDescription: ['HTML', 'React', 'JavaScript', 'Tailwind'],
      images: [
        '/Images/project1.png',
        '/Images/project11.png'
      ],
      liveLink: 'https://wildguards.vercel.app/',
      githubLink: 'https://github.com/yourusername/wildguards'
    },
    {
      name: 'Magic Talent',
      description: 'A talent booking platform for artists and performers.',
      techDescription: ['HTML', 'React', 'JavaScript', 'Tailwind'],
      images: [
        '/Images/project2.png',
        '/Images/project22.png'
      ],
      liveLink: 'https://magictalent.vercel.app/',
      githubLink: 'https://github.com/yourusername/magictalent'
    },
    {
      name: 'Book Shop App',
      description: 'An online book store for browsing and purchasing books.',
      techDescription: ['HTML', 'React', 'JavaScript', 'Tailwind'],
      images: [
        '/Images/project3.png',
        '/Images/project33.png'
      ],
      liveLink: 'https://ashokabookdepot.netlify.app/',
      githubLink: 'https://github.com/yourusername/ashokabookdepot'
    },
  ];

  const techIcons = {
    HTML: <FaHtml5 className="text-orange-500 w-6 h-6" />, 
    React: <FaReact className="text-blue-400 w-6 h-6" />, 
    JavaScript: <FaJs className="text-yellow-400 w-6 h-6" />, 
    Tailwind: <FaCss3Alt className="text-teal-400 w-6 h-6" />
  };

  return (
    <section id='projects' className="min-h-screen bg-white text-black px-4 sm:px-6 md:px-12 py-12">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center text-black">Projects</h2>

      {projects.map((project, idx) => (
        <div key={idx} className="bg-gray-100 rounded-lg shadow-lg mb-12 p-6">
          {/* First row: Image left, Text right */}
          <div className={`flex flex-col md:flex-row items-center mb-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img src={project.images[0]} alt={project.name} className="rounded-lg w-full h-auto" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-black">{project.name}</h3>
              <hr className="border-gray-400 w-1/2 mb-4" />
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 font-semibold">Live Demo</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 font-semibold">GitHub</a>
              </div>
            </div>
          </div>

          {/* Second row: Tech icons left, Image right */}
          <div className={`flex flex-col md:flex-row items-center bg-white text-black rounded-lg p-4 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 flex flex-wrap gap-4">
              {project.techDescription.map((tech, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded shadow">
                  {techIcons[tech]} <span className="font-semibold">{tech}</span>
                </div>
              ))}
            </div>
            <div className="md:w-1/2">
              <img src={project.images[1]} alt={`${project.name} Tech`} className="rounded-lg w-full h-auto" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
