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
          Here are the techologies that I already know and also those I'm learning right now.
        </p>
        <div className="tech-icons-container">
          {techs}
        </div>
      </div>
      <div className="custom-shape-divider-bottom--thin">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};