import techstackData from "../../data/techstackData.json";
import TechList from "../small-components/TechList";
import "./techstack.css";

export default function TechStack() {


  const techs = techstackData.map(tech => <TechList key={tech.name} name={tech.name} icon={tech.icon} />);

  return (
    <section className="techstack section-container" id="tech">
      <h2 className="techstack-title">Technologies I use</h2>
      <div className="techstack-content">
        <p className="techstack-paragraph">
          Here are the techologies that I already know and also those I"m learning right now.
        </p>
        <div className="tech-icons-container">
          {techs}
        </div>
      </div>
    </section>
  );
};