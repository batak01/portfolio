import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    fetch("https://api.github.com/users/batak01/repos")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.slice(0, 4));
        } else {
          console.error("GitHub API error:", data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={dark ? "dark" : ""}>
      <AnimatePresence>
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black text-black dark:text-white transition-all duration-500">

          {/* Navbar */}
          <nav className="flex justify-between items-center p-6 backdrop-blur-lg bg-white/30 dark:bg-white/10 border-b border-gray-300 dark:border-gray-800 sticky top-0 z-50">
            <h1 className="text-xl font-bold">MyPortfolio</h1>
            <div className="space-x-6 flex items-center">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
              <button onClick={() => setDark(!dark)} className="px-3 py-1 border rounded-lg">
                {dark ? "☀️" : "🌙"}
              </button>
            </div>
          </nav>

          {/* Hero */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center text-center py-20 px-4"
          >
            <img src="/image/profile.jpg" className="rounded-full w-32 h-32 mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Pebrin Pardede</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl">
              Building modern web experiences with React.
            </p>
            <a href="/cv.pdf" className="mt-6 px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black">
              Download CV
            </a>
          </motion.section>

          {/* About */}
          <section id="about" className="px-6 py-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Passionate developer focused on performance and clean UI.
            </p>
          </section>

          {/* Projects (GitHub API) */}
          <section id="projects" className="px-6 py-16 max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Projects</h3>

            {loading ? (
              <p className="text-center">Loading projects...</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {repos.map(repo => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl backdrop-blur-lg bg-white/40 dark:bg-white/10 border border-gray-200 dark:border-gray-700"
                  >
                    <h4 className="font-bold mb-2">{repo.name}</h4>
                    <p className="text-sm text-gray-500">{repo.description}</p>
                  </motion.a>
                ))}
              </div>
            )}
          </section>

          {/* Contact */}
          <section id="contact" className="px-6 py-16 text-center">
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <a href="mailto:your@email.com" className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black">
              Email Me
            </a>
          </section>

          <footer className="text-center py-6 text-gray-500">
            © 2026 Pebrin Pardede
          </footer>
        </div>
      </AnimatePresence>
    </div>
  );
}
