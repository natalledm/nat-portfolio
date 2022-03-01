import '../styles/components/techstack.css';
import { techlistData } from '../data/techstackData';
import TechList from './TechList';

export default function TechStack() {

  const techs = techlistData.map((tech, index) => {
    const { name, icon } = tech;
    return <TechList key={index} name={name} icon={icon} />
  });

  return (
    <section className="techstack">
      <div className="techstack-content">
        <h1>Technologies I use</h1>
        <p className="techstack-paragraph">
          Here are the techologies that I already know and also those I'm learning right now.
        </p>
        <div className="tech-icons-container">
          {techs}
        </div>
      </div>
    </section>
  );
};