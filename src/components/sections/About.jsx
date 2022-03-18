import womanComputerMobile from "../../assets/illustrations/pale-woman-works-with-computer-small.png";
import womanComputerDesktop from "../../assets/illustrations/pale-woman-works-with-computer.png";
import "./about.css";

export default function About() {
  return (
    <section className="about section-container" id="about">
      <img src={womanComputerMobile} alt="Woman works with computer" className="about-img-mobile" />
      <h2 className="about-title">About me</h2>
      <div className="about-content-container">
        <div>
          <p className="about-paragraph">
            I am a person that is passionate about technologies, colors, games, and everything related to words.
            I have a background in Linguistics and I love reading, translating, and writing.
          </p>
          <p className="about-paragraph">
            The love for words, games, and colors merged into the front-end development, something that I am loving to learn more and more.
            Currently I work with the triad HTML/CSS/JS and React. :)
          </p>
        </div>
        <img src={womanComputerDesktop} alt="Woman works with computer" className="about-img-desktop" />
      </div>
    </section>
  );
};