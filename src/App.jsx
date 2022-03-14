import Navbar from "./components/layout-main-screen/Navbar";
import Hero from "./components/layout-main-screen/Hero";
import Footer from "./components/layout-main-screen/Footer";
import Projects from "./components/project-components/Projects";
import About from "./components/layout-main-screen/About";
import TechStack from "./components/layout-main-screen/TechStack";
import "./main.css";

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
