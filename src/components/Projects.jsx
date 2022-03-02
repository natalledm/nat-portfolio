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
    <section className="projects section-container" id='projects'>
        <h1 className='projects-title'>Projects</h1>
      <div className="projects-content">
        <p className='project-paragraph'>
          Here are the projects I will be making during the Frontend course at Novare Potential and a couple more I did before.
        </p>
        <div className="projects-cards">
          {cards}
        </div>        
      </div>
    </section>
  );
};
