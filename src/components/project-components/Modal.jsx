import closeIcon from '../../assets/illustrations/close.png';
import './modal.css';
import React from "react";
import ReactDOM from "react-dom";

export default function Modal(props) {

  const { isOpen, onClose, project } = props;

  const { name, description, screenshot, alt, techlist, hosted, git } = project;

  const printURL = require(`../../assets/${screenshot}`);

  const cssPills = techlist.map(tech => {
    return (<span key={tech} className="tech-css-pills">
      {tech}
    </span>)
  });

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={onClose}></div>
      <section className="modal">
        <div className="modal-content">
          <span onClick={onClose}><img src={closeIcon} alt="" className='modal-close-button' /></span>
          <img src={printURL} alt={alt} className="modal-image" />
          <h3 className="project-title">{name}</h3>
          <span className="project-description-container">
            <p className="project-description">{description}</p>
            <span className="project-tech">{cssPills}</span>
            <span className="project-links">
              <a href={hosted} className="project-hosted" target="_blank" rel="noreferrer">Visit Website/App</a>
              <a href={git} className="project-repo" target="_blank" rel="noreferrer">Git Repository</a>
            </span>
          </span>
        </div>
      </section>
    </>,
    document.getElementById("portal")
  );
}