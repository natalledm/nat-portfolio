import "../../styles/components/project-card.css";
import Modal from "../project-components/Modal";
import { useState } from "react";

export default function ProjectCardFinished(item) {
  const { name, image, isFinished } = item;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="project-card"
      onClick={setModal(<ModalProject item={item} />)}
      dissable
    >
      <span>
        <div className="card-image-container">
          {isFinished && <span>Comming soon</span>}
          <img src={image} alt="" className="project-card-image" />
        </div>
        <p className="project-card-name">{name}</p>
      </span>
    </button>
  );
}
