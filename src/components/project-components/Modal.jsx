import React from "react";
import ReactDOM from "react-dom";
import '../../styles/components/modal.css';

export default function Modal(props) {

  const { isOpen, onClose, project } = props;

  const { name, description, image, alt, techlist, hosted, git } = project;

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <section className="modal">
        <div className="modal-content">
          <button onClick={onClose}>Close</button>
          <img src={image} alt={alt} className="modal-image"/>
          <h2 className="project-title">{name}</h2>
          <p className="project-description">{description}</p>
          <span className="project-tech">{techlist}</span>
          <a href={hosted} className="project-hosted"></a>
          <a href={git} className="project-hosted"></a>
        </div>
      </section>
    </>,
    document.getElementById("portal")
  );
}