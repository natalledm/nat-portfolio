import './project-card.css';
import Modal from './Modal';
import { useState } from 'react';

export default function ProjectCard(props) {

  const { name, image, isFinished } = props.item;

  const cardImage = require(`../../assets/${image}`);

  const [isOpen, setIsOpen] = useState(false);

  let imageClasses = "project-card-image ";
  const classImgNotDone = "not-done";

  if (!isFinished) {
    imageClasses += classImgNotDone;
  } else {
    imageClasses = "project-card-image";
  }

  return (
    <>
      <button
        className="project-card"
        onClick={() => setIsOpen(true)}
      >
        <div className="card-image-container">
          <img src={cardImage} alt="" className={imageClasses} />
          {!isFinished && <p className='project-card-coming-soon'>Coming soon</p>}
        </div>
        <p className="project-card-name">{name}</p>
      </button>
      {isFinished && <Modal project={props.item} isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  )
}