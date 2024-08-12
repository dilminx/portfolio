import About from "./components/About";
import Contactform from "./components/Contactform";
import Footer from "./components/Footer";
import HeroSections from "./components/HeroSections";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <main className="overflow-x-hidden text-gray-200 bg-gradient-to-b from-slate-800 to-black">
        <Navbar />
        <HeroSections />
        <About />
        <Projects />
        <Skills />
        <Contactform />
        <Footer/>
        
      </main>
    </>
  );
}

export default App;
