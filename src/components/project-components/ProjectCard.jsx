import '../../styles/components/project-card.css';

export default function ProjectCard(project) {
  // think about a way to show different photos or a thumbnail of the project
  const { name, image, isFinished } = project
  // onClick em todo o div do card

  if (!isFinished) return (
    // see if need background img in p or I can put a paragraph on top of the img
    <div className="project-card">
      <div className="card-image-container">
        <img src={image} alt="" className="project-card-image not-done" />
        <p className='project-card-coming-soon'>Coming soon</p>
      </div>
      <p className="project-card-name">{name}</p>
    </div>
  );

  return (
    <div className="project-card">
      <div className="card-image-container">
        <img src={image} alt="" className="project-card-image" />
      </div>
      <p className="project-card-name">{name}</p>
    </div>
  )
}