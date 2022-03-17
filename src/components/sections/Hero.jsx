import arrow from '../../assets/illustrations/arrow-thin.svg';
import './hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-title-container">
        <span className="hero-title-name"> Hi there, I'm Natalle.
          <span className="hero-title-role">Front-end <span className="hero-title-emphasis">Developer</span>.</span></span>
      </div>
      <img src={arrow} alt="" className='hero-arrow' />
    </section>
  );
};