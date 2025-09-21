import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./styles/main.css";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;