import "../../styles/components/contact.css";

export default function Contact(contact) {
  const { icon, info } = contact;

  const iconFile = `icons/${icon}`;

  return (
    <div className="contact-container">
      <span className="icon-image-background">
        <img src={iconFile} alt="" className="icon-image" />
      </span>
      <p className="contact-info">{info}</p>
    </div>
  );
}
