import '../styles/components/projects.css';
import ProjectCard from './project-components/ProjectCard';
import { projects } from '../data/projectsData';

export default function Projects() {

  // name, image, isFinished
  const cards = projects.map((project, index) => {
    const { name, image, isFinished } = project;
    return <ProjectCard key={index} name={name} image={image} isFinished={isFinished} />
  });

  return (
    <section className="projects">
      <div className="projects-content">
        <h1>Projects</h1>
        <p className='project-paragraph'>
          Here are the projects I will be making during the Frontend course at Novare Potential.
        </p>
        <div className="projects-cards">
          {cards}
        </div>
      </div>
    </section>
  );
};
