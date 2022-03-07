import "../styles/components/projects.css";
import {
  ProjectCardFinished,
  ProjectCardToBeDone,
} from "./project-components/ProjectCard";
import { projects } from "../data/projectsData";

export default function Projects() {
  // card builder
  const cards = projects.map((project, index) => {
    const { name, image, isFinished } = project;

    // Nesting -1 this can be made cleaner like this:
    // Duplicate code, the same Card can be used for the comming soon or active project item. Just like the pending or completed item in the todo list -5 (yes this one is a serious one)
    if (!isFinished)
      return (
        <ProjectCardToBeDone
          key={index}
          name={name}
          image={image}
          isFinished={isFinished}
        />
      );
    return (
      <ProjectCardFinished
        key={index}
        name={name}
        image={image}
        isFinished={isFinished}
        projectInfo={project}
      />
    );
  });

  return (
    <section className="projects section-container" id="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-content">
        <p className="project-paragraph">
          Here are the projects I will be making during the Frontend course at
          Novare Potential and a couple more I did before.
        </p>
        <div className="projects-cards">{cards}</div>
      </div>
    </section>
  );
}
