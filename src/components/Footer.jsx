import "../styles/components/footer.css";

// data files
import { networkData } from "../data/networkData";
import { contactData } from "../data/contactData";

// components
import NetworkInfo from "./footer-components/NetworkInfo";
import Contact from "./footer-components/Contact";

export default function Footer() {
  // This is a bit harder to read, use item instead of network -1. And don't use index, add an id to each item in the jsons
  // By the way your contactData and similar, should be json files. You even manage to write the syntax correctly as a json but is exported as a js -1
  const socialNetwork = networkData.map((network, index) => {
    const { icon, url } = network; // no need to destructure here, do it inside the component -1
    return <NetworkInfo key={index} icon={icon} url={url} />;
  });

  const contactInfo = contactData.map((contact, index) => {
    const { icon, info } = contact; // same here, look this line is duplicate code. If you have 10 sections similar to socialNetwork and contactInfo you would be destructuring 10 times instead of just 1 inside the component
    return <Contact key={index} icon={icon} info={info} />;
  });

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-contact section-container">
          <h1>Contact Me</h1>
          <div className="contact-content">
            <p className="footer-paragraph">
              Here is my contact information if you are interested in starting a
              collaboration.
            </p>
            <div className="contact-list-containter">{contactInfo}</div>
          </div>
        </div>
        <div className="footer-social">
          <div className="social-list">{socialNetwork}</div>
          <p className="copyright">© 2022 • Natalle Moura</p>
        </div>
      </div>
    </footer>
  );
}
