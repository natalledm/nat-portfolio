import arrow from '../../assets/illustrations/arrow-thin.svg';
import './hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-title-container">
        <span className="hero-title-name"> Hi there, I'm Natalle.
          <span className="hero-title-role">Front-end <span className="hero-title-emphasis">Developer</span>.</span></span>
      </div>
      <div className="divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};