import '../styles/components/projects.css';
import { ProjectCardFinished, ProjectCardToBeDone} from './project-components/ProjectCard';
import { projects } from '../data/projectsData';

export default function Projects() {

  // card builder
  const cards = projects.map((project, index) => {
    const { name, image, isFinished } = project;

    
    if(!isFinished) return <ProjectCardToBeDone key={index} name={name} image={image} isFinished={isFinished} />
    return <ProjectCardFinished key={index} name={name} image={image} isFinished={isFinished} projectInfo={project} />
  });
  
  return (
    <section className="projects" id='projects'>
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
