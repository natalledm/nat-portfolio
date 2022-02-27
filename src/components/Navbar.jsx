import logo from '../assets/logo/logo-white.png';
import '../styles/parts/navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-list-item'>
          <a href="#about">
            About
          </a>
        </li>
        <li className='navbar-list-item'>
          <a href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a href="#hero">
            <img src={logo} alt="Initial's NM inside a circle" className='logo' />
          </a>
        </li>
        <li className='navbar-list-item'>
          <a href="#tech">Tech</a>
        </li>
        <li className='navbar-list-item'>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};