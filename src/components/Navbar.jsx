import logo from '../assets/logo/logo-small.png'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about">
            About
          </a>
        </li>
        <li>
          <a href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a href="#hero">
            <img src={logo} alt="Initial's NM inside a circle" />
          </a>
        </li>
        <li>
          <a href="#tech">Tech</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};