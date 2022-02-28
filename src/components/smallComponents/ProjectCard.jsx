export default function ProjectCard(projects) {
  // think about a way to show different photos or a thumbnail of the project
  const {ProjectName} = projects
  return(
    <div className="project-card">
      <div className="card-content">
        <img src="" alt="" />
        <p className="project-name">{ProjectName}</p>
      </div>
    </div>
  )
}