import '../styles/parts/projects.css';
import ProjectCard from './project-components/ProjectCard';
import { projects } from '../data/projectsData';

export default function Projects() {

  // name, image, isFinished
  const cards = projects.map(project => {
    const { name, image, isFinished } = project;
    return <ProjectCard name={name} image={image} isFinished={isFinished} />
  });

  return (
    <section className="projects-section">
      <div className="projects-container">
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
