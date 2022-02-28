export default function ProjectCard(projects) {
  // think about a way to show different photos or a thumbnail of the project
  const { ProjectName, isDone } = projects
  // onClick em todo o div do card

  if (!isDone) return (
    // see if need background img in p or I can put a paragraph on top of the img
    <div className="project-card">
      <div className="card-content">
        <img src="" alt="" className="not-done" />
        <p className="project-name">{ProjectName}</p>
      </div>
    </div>
  );

  return (
    <div className="project-card">
      <div className="card-content">
        <img src="" alt="" />
        <p className="project-name">{ProjectName}</p>
      </div>
    </div>
  )
}