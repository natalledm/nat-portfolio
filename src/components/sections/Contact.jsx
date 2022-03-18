import contactData from "../../data/contactData.json";
import ContactInfo from "../small-components/ContactInfo";
import "./contact.css";

export default function Contact() {

  const contactItem = contactData.map((contact, index) => <ContactInfo key={index} icon={contact.icon} info={contact.info} />);



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