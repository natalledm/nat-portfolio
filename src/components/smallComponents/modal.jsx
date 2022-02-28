export default function Modal(projects) {
  const { projectImage, projectImageAlt, projectName,
    projectDescription, projectTech, projectHosted, projectGit } = projects;

  return (
    <section className="modal">
      <div className="modal-content">
        <img src={projectImage} alt={projectImageAlt} />
        <h2 className="project-title">{projectName}</h2>
        <p className="project-description">{projectDescription}</p>
        <span className="project-tech">{projectTech}</span>
        <a href={projectHosted} className="project-hosted"></a>
        <a href={projectGit} className="project-hosted"></a>
      </div>
    </section>
  );
}