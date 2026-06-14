export default function ContactCard() {

  return (
    <div
      className="
        rounded-3xl
        p-8
        text-center
        bg-white/40
        dark:bg-white/10
        backdrop-blur-lg
        border
        border-gray-200
        dark:border-gray-700
      "
    >

      <h4 className="text-2xl font-bold mb-4">
        Let's work together 🚀
      </h4>


      <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8">
        Have a project idea, collaboration opportunity,
        or just want to discuss technology?
        Feel free to reach out.
      </p>


      <div className="flex flex-col md:flex-row justify-center gap-4">


        <a
          href="mailto:pardedepebrin@gmail.com"
          className="
            px-6
            py-3
            rounded-xl
            bg-black
            text-white
            dark:bg-white
            dark:text-black
            transition
            hover:scale-105
          "
        >
          Send Email
        </a>


        <a
          href="https://github.com/batak01"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6
            py-3
            rounded-xl
            border
            border-gray-300
            dark:border-gray-600
            transition
            hover:scale-105
          "
        >
          GitHub Profile
        </a>

      </div>

      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">

        <p>
          📍 Indonesia
        </p>

        <p>
          Available for freelance and remote work
        </p>

      </div>

    </div>
  );
}