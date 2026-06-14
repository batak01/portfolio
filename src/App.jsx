import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import ProjectCard from "./components/ProjectCard";

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
  document.documentElement.classList.toggle("dark", dark);
}, [dark]);

  return (
  <div>
    <AnimatePresence>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black text-black dark:text-white transition-all duration-500">
        <Navbar 
          dark={dark}
          setDark={setDark}
        />
        
        <Hero />

        <About />

        <Projects />

        <Contact />

        <Footer />

        </div>
      </AnimatePresence>
    </div>
  );
}
