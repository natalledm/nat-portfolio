import womanComputer from '../assets/illustrations/pale-woman-works-with-computer-small.png';
import womanSelfie from '../assets/illustrations/casual-life-3d-woman-taking-a-funny-photo-with-dog-1.png'
import '../styles/components/about.css';

export default function About() {
  return (
    <section className='about' id='about'>
      <div className="about-container">
        <img src={womanComputer} alt="Pale woman works with computer" className='about-illustration' />
        <h1>About me</h1>
        <p className='about-paragraph'>
          I am a person that is passionate about technologies, colors, games, and everything related to words.
          I have a background in Linguistics and I love reading, translating, and writing.
        </p>
        <p className='about-paragraph'>
          The love for words, games, and colors merged into the frontend development, something that I am loving to learn more and more.
          Currently I work with the triad HTML/CSS/JS and React. :)
        </p>
        <span className='image-container'>
          <img src={womanSelfie} alt="Pale woman works with computer" className='about-illustration-second' />
        </span>
      </div>
    </section>
  );
};