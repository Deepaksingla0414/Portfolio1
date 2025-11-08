import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiRedux } from 'react-icons/si';

export default function Slider() {
  const techIcons = [
    { icon: FaReact, color: '#61DAFB' },
    { icon: FaNodeJs, color: '#68A063' },
    { icon: FaHtml5, color: '#E34F26' },
    { icon: FaCss3Alt, color: '#1572B6' },
    { icon: FaJsSquare, color: '#F7DF1E' },
    { icon: FaPython, color: '#3776AB' },
    { icon: FaGithub, color: '#181717' },
    { icon: SiCplusplus, color: '#00599C' },
    { icon: SiRedux, color: '#764ABC' },
  ];

  return (
    <div className="overflow-hidden w-full bg-black py-6">
      <div className="flex animate-scroll space-x-10">
        {techIcons.concat(techIcons).map(({ icon: Icon, color }, index) => (
          <div key={index} className="flex-shrink-0 text-6xl" style={{ color: color }}>
            <Icon />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
}


