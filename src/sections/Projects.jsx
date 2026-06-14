import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";


export default function Projects() {

  return (
    <section
      id="projects"
      className="px-6 py-16 max-w-5xl mx-auto"
    >

      <h3 className="text-2xl font-semibold mb-6 text-center">
        Projects & Experience
      </h3>


      <div className="grid md:grid-cols-2 gap-6">

        {
          projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))
        }

      </div>

    </section>
  );
}