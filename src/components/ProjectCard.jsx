import { motion } from "framer-motion";


export default function ProjectCard({ project }) {

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
        p-6
        rounded-2xl
        backdrop-blur-lg
        bg-white/40
        dark:bg-white/10
        border
        border-gray-200
        dark:border-gray-700
      "
    >

      <h4 className="text-xl font-bold mb-2">
        {project.project}
      </h4>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {project.company}
      </p>
      
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {project.role}
      </p>


      <p className="text-sm mb-4">
        {project.duration}
      </p>


      <p className="text-gray-600 dark:text-gray-300 mb-5">
        {project.description}
      </p>


      <div className="flex flex-wrap gap-2">

        {
          project.technologies.map(item => (
            <span
              key={item}
              className="
                px-3
                py-1
                text-xs
                rounded-full
                bg-black/10
                dark:bg-white/20
              "
            >
              {item}
            </span>
          ))
        }

      </div>


    </motion.div>
  );
}