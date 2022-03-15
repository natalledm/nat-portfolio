import './footer.css';

// data files
import { networkData } from '../../data/networkData';
import { contactData } from '../../data/contactData';

// components
import NetworkInfo from '../small-components/NetworkInfo';
import Contact from '../small-components/Contact';

export default function Footer() {

  const socialNetwork = networkData.map((network, index) => {
    const { icon, url } = network;
    return (
      <NetworkInfo key={index} icon={icon} url={url} />
    );
  });

  const contactInfo = contactData.map((contact, index) => {
    const { icon, info } = contact;
    return (
      <Contact key={index} icon={icon} info={info} />
    );
  });

  return (
    <footer className="footer" id='contact'>
      <div className="footer-container">
        <div className="footer-contact section-container">
          <h1>Contact Me</h1>
          <div className="contact-content">
            <p className="footer-paragraph">
              Here is my contact information if you are interested in starting a collaboration.
            </p>
            <div className="contact-list-containter">
              {contactInfo}
            </div>
          </div>
        </div>
        <div className="footer-social">
          <div className="social-list">
            {socialNetwork}
          </div>
          <p className="copyright">© 2022 • Natalle Moura</p>
        </div>
      </div>
    </footer>
  );
};