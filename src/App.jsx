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
      <main className="relative overflow-x-hidden text-slate-800 mesh-bg min-h-screen">
        <Navbar />
        <HeroSections />
        <div className="section-divider my-4" />
        <About />
        <div className="section-divider my-4" />
        <Projects />
        <div className="section-divider my-4" />
        <Skills />
        <div className="section-divider my-4" />
        <Contactform />
        <Footer />
      </main>
    </>
  );
}

export default App;
