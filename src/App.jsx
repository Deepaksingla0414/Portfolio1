
import Home from "./components/Home.jsx";
import About from "./components/About";
// import Skills from "./components/Skills";

// import Contact from "./components/Contact";

import Slider from "./components/Slider";
import Slider2 from "./components/Slider2";
// import Projects from "./components/Project.jsx";



export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">

      <section id="home"><Home /></section>
      <section id="Slider"><Slider/></section>
      <section id="Slider2"><Slider2/></section>

      <section id="about"><About /></section>
      {/* <section id="skills"><Skills /></section>
      <section id="Project"><Projects/></section>

      <section id="contact"><Contact /></section> */}
      
     
  
    </div>
  );
}
