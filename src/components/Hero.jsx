import "../styles/components/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* HTML syntax -1 you can have only 1 H1 per page, if you need to make 3 lines, then use the <br/> tag inside the H1 */}
        <h1 className="hero-title">Hello there! :) </h1>
        <h1 className="hero-title">I’m Natalle,</h1>
        <h1 className="hero-title">a Frontend Developer</h1>

        {/* Correct */}
        {/* This leads to a bit of nesting, but is the correct way becuase using correct HTML syntax take priority over nesting */}
        <h1 className="hero-title">
          Hello there! :)
          <br />
          I’m Natalle,
          <br />a Frontend Developer
        </h1>
      </div>
    </section>
  );
}
