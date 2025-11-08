import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava } from 'react-icons/fa';
import { SiRedux, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai'; // Updated GitHub icon

export default function Skills() {
  const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#68A063' },
    { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'GitHub', icon: AiFillGithub, color: '#FF0000' }, // Changed color to red
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  ];

  const half = Math.ceil(skills.length / 2);
  const firstRow = skills.slice(0, half);
  const secondRow = skills.slice(half);

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-12 space-y-6">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">Skills</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-6 animate-scroll-left">
          {firstRow.concat(firstRow).map((skill, index) => (
            <div key={index} className="min-w-[200px] bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col items-center transition-transform transform hover:scale-105 flex-shrink-0">
              <skill.icon className="text-5xl sm:text-6xl mb-3 sm:mb-4" style={{ color: skill.color }} />
              <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2 text-gray-200 text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-6 animate-scroll-right">
          {secondRow.concat(secondRow).map((skill, index) => (
            <div key={index} className="min-w-[200px] bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col items-center transition-transform transform hover:scale-105 flex-shrink-0">
              <skill.icon className="text-5xl sm:text-6xl mb-3 sm:mb-4" style={{ color: skill.color }} />
              <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2 text-gray-200 text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`@keyframes scroll-left { 0% { transform: translateX(0); } 50% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 50% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll-left { display: flex; animation: scroll-left 20s linear infinite; }
        .animate-scroll-right { display: flex; animation: scroll-right 20s linear infinite; }`}
      </style>
    </section>
  );
}