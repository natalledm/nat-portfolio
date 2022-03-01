import '../../styles/components/project-card.css';
import Modal from '../project-components/Modal';
import { useState } from 'react';

export function ProjectCardFinished(project) {

  const { name, image, isFinished, projectInfo } = project;

  const [isOpen, setIsOpen] = useState(false);

  if(isFinished) return (
    <div className="project-card">
      <a onClick={() => setIsOpen(true)}>
        <div className="card-image-container">
          <img src={image} alt="" className="project-card-image" />
        </div>
        <p className="project-card-name">{name}</p>
      </a>
      <Modal project={projectInfo} isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  )
  return;
}

export function ProjectCardToBeDone(project) {

  const { name, image, isFinished } = project;

  if (!isFinished) return (
    <div className="project-card">
      <div className="card-image-container">
        <img src={image} alt="" className="project-card-image not-done" />
        <p className='project-card-coming-soon'>Coming soon</p>
      </div>
      <p className="project-card-name">{name}</p>
    </div>
  );
  return;
}