import logo from '../../assets/logo/NM.png';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-list-item about-item'>
          <a href="#about">
            About
          </a>
        </li>
        <li className='navbar-list-item projects-item'>
          <a href="#projects">
            Projects
          </a>
        </li>
        <li className='logo-item'>
          <a href="#hero">
            <img src={logo} alt="Initial's NM inside a circle" className='logo' />
          </a>
        </li>
        <li className='name-spelled-container'>
          <span className='name-spelled'>Natalle Moura</span>
        </li>
        <li className='navbar-list-item tech-item'>
          <a href="#tech">Tech</a>
        </li>
        <li className='navbar-list-item contact-item'>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};