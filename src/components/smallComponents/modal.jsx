export default function Modal(projects) {
  const { name, description, image, alt, techlist, hosted, git} = projects;

  return (
    <section className="modal">
      <div className="modal-content">
        <img src={image} alt={alt} />
        <h2 className="project-title">{name}</h2>
        <p className="project-description">{description}</p>
        <span className="project-tech">{techlist}</span>
        <a href={hosted} className="project-hosted"></a>
        <a href={git} className="project-hosted"></a>
      </div>
    </section>
  );
}