import React from 'react';

export default function About() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center py-16 px-6 sm:px-8 md:px-12 lg:px-16 text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">About Me</h2>
      <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
        Hello! I am Deepak Singla, a passionate Full Stack Developer with experience in creating dynamic and responsive web applications.
        I enjoy building projects that combine clean design with efficient and scalable code.
        My expertise includes React, Node.js, HTML, CSS, JavaScript, Python, and more. I am always eager to learn new technologies and improve my skills.
      </p>
      <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
        In my projects, I focus on delivering high-quality, maintainable code and intuitive user experiences. Let's connect and build something amazing together!
      </p>
    </section>
  );
}