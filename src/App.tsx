
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ExpertiseOffer from "./components/Expertise/ExpertiseOffer";
import TechStack from "./components/TechStack/TechStack";
function App() {

  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <ExpertiseOffer/>
        <TechStack/>
        {/* <Navbar />
          <Hero />
          <Technologies />
          <Projects />
          <Achievements />
          <Contact /> */}
      </div>
    </>
  );
}

export default App;
