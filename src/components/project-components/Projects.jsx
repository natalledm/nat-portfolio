import "./projects.css";
import { ProjectCardFinished, ProjectCardToBeDone } from "./ProjectCard";
import projects from "../../data/projectsData.json";

export default function Projects() {

  // card builder
  const cards = projects.map((project, index) => {
    const { name, image, isFinished } = project;

    const cardImage = require(`../../assets/${image}`)

    if (!isFinished) return <ProjectCardToBeDone key={index} name={name} image={cardImage} isFinished={isFinished} />
    return <ProjectCardFinished key={index} name={name} image={cardImage} isFinished={isFinished} projectInfo={project} />
  });

  return (
    <section className="projects section-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-content">
        <p className="project-paragraph">
          Here are the projects I will be making during the Frontend course at Novare Potential and a couple more I did before.
        </p>
        <div className="projects-cards">
          {cards}
        </div>
      </div>
      <div className="shape-divider-bottom--thin">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};
