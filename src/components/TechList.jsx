import "../styles/components/techlist.css";

// good
export default function TechList(tech) {
  const { name, icon } = tech;

  const iconPath = `icons/${icon}`;

  return (
    <div className="techlist">
      <img src={iconPath} alt="" className="tech-image" />
      <p className="tech-name">{name}</p>
    </div>
  );
}
