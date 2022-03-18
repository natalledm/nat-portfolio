import './techstack.css';
import { techlistData } from '../../data/techstackData';
import TechList from '../small-components/TechList';

export default function TechStack() {

  const techs = techlistData.map((tech, index) => {
    const { name, icon } = tech;
    return <TechList key={index} name={name} icon={icon} />
  });

  return (
    <section className="techstack section-container" id='tech'>
      <h2 className='techstack-title'>Technologies I use</h2>
      <div className="techstack-content">
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