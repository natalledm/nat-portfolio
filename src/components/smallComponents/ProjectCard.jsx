export default function ProjectCard(projects) {
  // think about a way to show different photos or a thumbnail of the project
  const { name, image, isFinished } = projects
  // onClick em todo o div do card

  if (!isFinished) return (
    // see if need background img in p or I can put a paragraph on top of the img
    <div className="project-card">
      <div className="card-content">
        <img src="" alt="" className="not-done" />
        <p>Comming soon</p>
        <p className="project-name">{name}</p>
      </div>
    </div>
  );

  return (
    <div className="project-card">
      <div className="card-content">
        <img src={image} alt="" />
        <p className="project-name">{name}</p>
      </div>
    </div>
  )
}