import "./footer.css";

// data files
import { networkData } from "../../data/networkData";

// components
import NetworkInfo from "../small-components/NetworkInfo";

export default function Footer() {

  const socialNetwork = networkData.map((network, index) => {
    const { icon, url } = network;
    return (
      <NetworkInfo key={index} icon={icon} url={url} />
    );
  });

  return (
    <footer className="footer-container section-container" id="contact">
      <div className="social-list">
        {socialNetwork}
      </div>
      <p className="copyright">© 2022 • Natalle Moura</p>
    </footer>
  );
};