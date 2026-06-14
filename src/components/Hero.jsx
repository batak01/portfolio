import { motion } from "framer-motion";

export default function Hero() {

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center text-center py-20 px-4"
    >

      <img
        src="/image/pebrinpardede.png"
        className="rounded-full w-32 h-32 mb-6"
      />


      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Pebrin Pardede
      </h2>


      <p className="text-gray-500 dark:text-gray-400 max-w-xl">
        Software Engineer
        <br />
        Specializing in System Integration & Software Quality Engineering
      </p>


      <p className="text-gray-500 dark:text-gray-400 max-w-xl mt-4">
        Building reliable enterprise systems and modern web applications
        with a focus on scalability, quality, and user experience.
      </p>


      {/* <a
        href="/cv.pdf"
        className="mt-6 px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black"
      >
        Download CV
      </a> */}


    </motion.section>
  );
}