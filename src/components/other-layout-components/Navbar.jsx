import logo from "../../assets/logo/NM.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-items">
        <a href="#about" className="navbar-item about-item">About</a>
        <a href="#projects" className="navbar-item projects-item">Projects</a>
        <a href="#hero"><img src={logo} alt="Letters NM inside a circle" className="logo" /></a>
        <span className="name-spelled">Natalle Moura</span>
        <a href="#tech" className="navbar-item tech-item">Tech</a>
        <a href="#contact" className="navbar-item contact-item">Contact</a>
      </div>
    </nav>
  );
};