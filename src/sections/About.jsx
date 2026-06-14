import { motion } from "framer-motion";

export default function About() {

  return (

    <section
      id="about"
      className="
        px-6
        py-20
        max-w-6xl
        mx-auto
      "
    >

      <h3
        className="
          text-3xl
          font-bold
          text-center
          mb-12
        "
      >
        About Me
      </h3>

      <div
        className="
          grid
          md:grid-cols-2
          gap-10
          items-center
        "
      >

        {/* Profile Image */}

        <motion.div

          initial={{
            opacity: 0,
            x: -50
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 0.6
          }}

          className="
            flex
            justify-center"
        >

          <div className="
            relative
            w-72
            h-72"
          >

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              blur-3xl
              opacity-30
              rounded-full
            "
          />

          <img
            src="/image/profile.png"
            className="
              relative
              w-full
              h-full
              object-cover
              rounded-full
              border-4
              border-white/20"
          />

        </div>

        </motion.div>

        {/* Description */}

        <motion.div

          initial={{
            opacity: 0,
            x: 50
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 0.6
          }}

        >

          <h4
            className="
              text-2xl
              font-bold
              mb-4"
          >
            Hi, I'm Pebrin 👋
          </h4>

          <p
            className="
              text-gray-600
              dark:text-gray-400
              leading-relaxed
              mb-6"
          >

            I am a Software Engineer with a strong background in System Integration and Software Quality Assurance, bringing over 4 years of experience in building, testing, and improving enterprise application systems.

            My experience spans across banking, financial services, and insurance industries, where I have worked on system integration, Core Banking System support, API validation, software testing, and application quality improvement.

            I enjoy creating reliable and scalable solutions by combining technical expertise, analytical thinking, and a strong understanding of business processes.

          </p>

          <h5
            className="
              font-semibold
              mb-3"
          >
            Tech Stack
          </h5>

          <div
            className="
              flex
              flex-wrap
              gap-3
              mb-8"
          >

            {
              [
                "Manual Testing",
                "Automation Testing",
                "Software Development Life Cycle (SDLC)",
                "Software Testing Life Cycle (STLC)",
                "Agile Methodologies",
                "REST API",
                "API Integration",
                "System Integration"
              ].map(skill => (

                <span
                  key={skill}
                  className="
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    bg-black/10
                    dark:bg-white/20">
                  {skill}
                </span>

              ))
            }

          </div>

          <a
            href="/new-resume-pebrin-pardede-en.v1.0.pdf"
            download
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition">
            Download CV
          </a>

        </motion.div>

      </div>

    </section>

  );

}