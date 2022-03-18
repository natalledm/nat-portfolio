import Navbar from "./components/other-layout-components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/project-components/Projects";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";
import Footer from "./components/other-layout-components/Footer";
import "./app.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
