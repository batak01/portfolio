export default function Navbar({ dark, setDark }) {

  return (
    <nav className="flex justify-between items-center p-6 backdrop-blur-lg bg-white/30 dark:bg-white/10 border-b border-gray-300 dark:border-gray-800 sticky top-0 z-50">

      <h1 className="text-xl font-bold">
        MyPortfolio
      </h1>


      <div className="space-x-6 flex items-center">

        <a href="#about">
          About
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#contact">
          Contact
        </a>


        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 border rounded-lg"
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </div>

    </nav>
  );
}