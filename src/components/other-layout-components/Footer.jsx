import "./footer.css";

// data files
import networkData from "../../data/networkData.json";

// components
import NetworkInfo from "../small-components/NetworkInfo";

export default function Footer() {

  const socialNetwork = networkData.map((network, index) => <NetworkInfo key={index} icon={network.icon} url={network.url} />);

  return (
    <footer className="footer-container">
      <div className="social-list">
        {socialNetwork}
      </div>
      <p className="copyright">© Natalle Moura • 2022</p>
    </footer>
  );
};