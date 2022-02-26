import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

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
