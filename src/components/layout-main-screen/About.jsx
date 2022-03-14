import womanComputerMobile from '../../assets/illustrations/pale-woman-works-with-computer-small.png';
import womanComputerDesktop from '../../assets/illustrations/pale-woman-works-with-computer.png';
import womanSelfie from '../../assets/illustrations/casual-life-3d-woman-taking-a-funny-photo-with-dog-1.png'
import './about.css';

export default function About() {
  return (
    <section className='about' id='about'>
      <div className="section-container">
        <img src={womanComputerMobile} alt="Pale woman works with computer" className='about-img-mobile' />
        <div className='about-title-container'>
          <h1 className='about-title'>About me</h1>
        </div>
        <div className="about-content-container">
          <div>
            <p className='about-paragraph'>
              I am a person that is passionate about technologies, colors, games, and everything related to words.
              I have a background in Linguistics and I love reading, translating, and writing.
            </p>
            <p className='about-paragraph'>
              The love for words, games, and colors merged into the frontend development, something that I am loving to learn more and more.
              Currently I work with the triad HTML/CSS/JS and React. :)
            </p>
          </div>
          <img src={womanComputerDesktop} alt="Pale woman works with computer" className='about-img-desktop' />
          <img src={womanSelfie} alt="Pale woman works with computer" className='about-img-selfie' />
        </div>
      </div>
    </section>
  );
};