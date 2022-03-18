import { contactData } from "../../data/contactData";
import ContactInfo from "../small-components/ContactInfo";
import "./contact.css";

export default function Contact() {

  const contactItem = contactData.map((contact, index) => {
    const { icon, info } = contact;
    return (
      <ContactInfo key={index} icon={icon} info={info} />
    );
  });


  return (
    <div className="contact-container section-container">
      <h2>Contact me</h2>
      <div className="contact-content">
        <p className="contact-paragraph">
          Here is my contact information if you want to reach out. :)
        </p>
        <div className="contact-list-containter">
          {contactItem}
        </div>
      </div>
    </div>
  );
};