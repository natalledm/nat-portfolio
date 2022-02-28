import '../styles/parts/projects.css';
import ProjectCard from './project-components/ProjectCard';

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1>Projects</h1>
        <p className='project-paragraph'>Here are the projects I will be making during the Frontend course at Novare Potential.</p>
        <div className="projects-cards">
          <ProjectCard name="Pebolim" image={"images/photos/lorenzo-herrera-unsplash.jpg"} isFinished={true} />
          <ProjectCard name="TBD" image={"images/photos/lorenzo-herrera-unsplash.jpg"} isFinished={false} />
        </div>
      </div>
    </section>
  );
};
