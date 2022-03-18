import "./contact-info.css";

export default function ContactInfo(contact) {

  const { icon, info } = contact;

  const iconFile = require(`../../assets/icons/${icon}`);

  return (
    <div className="contact-info-container">
      <span className="icon-image-background">
        <img src={iconFile} alt="" className="icon-image" />
      </span>
      <p className="contact-info">{info}</p>
    </div>
  );
};