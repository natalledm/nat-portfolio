import Navbar from "./components/other-layout-components/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/other-layout-components/Footer";
import Projects from "./components/project-components/Projects";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import "./app.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Footer />
    </div>
  );
}
