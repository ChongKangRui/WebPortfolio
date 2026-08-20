
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ExpertiseOffer from "./components/Expertise/ExpertiseOffer";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
function App() {

  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <ExpertiseOffer/>
        <TechStack/>
        <Projects/>
        <Experience/>

      </div>
    </>
  );
}

export default App;
