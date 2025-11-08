import React from 'react';

export default function Slider() {
  const techItems = [
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'JavaScript' },
    { name: 'Python' },
    { name: 'GitHub' },
    { name: 'C++' },
    { name: 'Redux' },
  ];

  return (
    <div className="overflow-hidden w-full bg-black py-6">
      <div className="flex animate-scroll space-x-16 items-center">
        {techItems.concat(techItems).map(({ name }, index) => (
          <div key={index} className="flex flex-col items-center text-gray-400 font-mono text-2xl sm:text-3xl">
            <span>{name}</span>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 25s linear infinite;
          }
        `}
      </style>
    </div>
  );
}