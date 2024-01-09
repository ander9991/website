import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Socials from "./components/Socials";
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education />
      <WorkExperience />
      <Portfolio />
      <Experience />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
