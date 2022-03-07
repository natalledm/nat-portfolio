import "../styles/components/techstack.css";
import { techlistData } from "../data/techstackData";
import TechList from "./TechList";

// ok
export default function TechStack() {
  const techs = techlistData.map((tech, index) => {
    const { name, icon } = tech; // desturcture inside the component not here
    return <TechList key={index} name={name} icon={icon} />;
  });

  return (
    <section className="techstack section-container" id="tech">
      <h1>Technologies I use</h1>
      <div className="techstack-content">
        <p className="techstack-paragraph">
          Here are the techologies that I already know and also those I'm
          learning right now.
        </p>
        <div className="tech-icons-container">{techs}</div>
      </div>
    </section>
  );
}
