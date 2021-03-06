import "./techlist.css";

export default function TechList(tech) {

  const { name, icon } = tech;

  const iconPath = require(`../../assets/icons/${icon}`);

  return (
    <div className="techlist">
      <img src={iconPath} alt="" className="tech-image" />
      <p className="tech-name">{name}</p>
    </div>
  )
}