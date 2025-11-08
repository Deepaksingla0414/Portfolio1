import React, { useEffect, useState } from "react";

export default function Home() {
  const fullText = "PORTFOLIO";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    let typingTimeout;

    if (!isDeleting && index < fullText.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, typingSpeed);
    } else if (index === fullText.length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (index === 0 && isDeleting) {
      setIsDeleting(false);
    }

    return () => clearTimeout(typingTimeout);
  }, [index, isDeleting]);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1720132000141-a405eff592e9?ixlib=rb-4.1.0&auto=format&fit=crop&w=1770&q=80')",
      }}
    >
      {/* Navbar */}
      <nav
        className="absolute top-0 left-0 w-full bg-black/60 backdrop-blur-md py-4 px-6 sm:px-8 flex justify-between items-center text-lg tracking-wide"
        style={{ fontFamily: "'Stack Sans', sans-serif" }}
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
          Deepak Singla
        </h1>

        {/* Hamburger for Mobile */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="text-white text-3xl md:hidden cursor-pointer"
        >
          ☰
        </label>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-gray-300 font-semibold">HOME</a>
          <a href="#about" className="hover:text-gray-300 font-semibold">ABOUT</a>
          <a href="#projects" className="hover:text-gray-300 font-semibold">PROJECTS</a>
          <a
            href="https://wildguards.vercel.app/"
            target="_blank"
            className="hover:text-gray-300 font-semibold"
          >
            LIVE PROJECT
          </a>
          <a href="#contact" className="hover:text-gray-300 font-semibold">CONTACT</a>
          {/* Resume Download Button */}
          <a
            href="/Images/Deepak0414.pdf"
            download
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="peer-checked:flex hidden flex-col bg-black/90 absolute top-16 right-6 p-4 rounded-lg space-y-3 md:hidden">
          <a href="#home" className="hover:text-gray-300 font-semibold">HOME</a>
          <a href="#about" className="hover:text-gray-300 font-semibold">ABOUT</a>
          <a href="#projects" className="hover:text-gray-300 font-semibold">PROJECTS</a>
          <a
            href="https://wildguards.vercel.app/"
            target="_blank"
            className="hover:text-gray-300 font-semibold"
          >
            LIVE PROJECT
          </a>
          <a href="#contact" className="hover:text-gray-300 font-semibold">CONTACT</a>
          <a
            href="/Deepak_Singla_Resume.pdf"
            download
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-center"
          >
            RESUME
          </a>
        </div>
      </nav>

      {/* Main Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-4 mt-20"
      >
        <h1
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-wider mb-4 drop-shadow-lg"
          style={{ fontFamily: "'Stack Sans', sans-serif" }}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl max-w-2xl font-light drop-shadow-md"
          style={{ fontFamily: "'Stack Sans', sans-serif" }}
        >
          I'm <span className="font-semibold">Deepak Singla</span> — a passionate web developer
          who loves building modern, clean, and functional websites.
        </p>
      </section>
    </div>
  );
}
