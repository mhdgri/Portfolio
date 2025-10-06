// src/pages/Projects.jsx
import SEO from "../components/SEO";
import { projectsData } from "../data/projectsData";
import ProjectsCard from "../components/ProjectsCard";

export default function Projects() {
  return (
    <>
      <SEO
        title="Mes Projets"
        description="Découvrez mes projets de développement web : ArgentBank (React/Redux), Sophie Bluel (JavaScript Vanilla), et ma To-Do List React."
        canonical="/projects"
      />
      <section className="py-16 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Mes Projets</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => (
              <ProjectsCard 
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.shortDescription}
                image={project.image}
                techs={project.techs}
                codeLink={project.codeLink}
                demoLink={project.demoLink}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}