import BrandBand from "./components/Brandband/Brandband.component";
import ClassFeature from "./components/ClassFeature/ClassFeature.component";
import Features from "./components/Features/Features.component";
import Hero from "./components/Hero/Hero.component";
import Navbar from "./components/Navbar/Navbar.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <BrandBand />
      <ClassFeature />
      <Features/>
    </div>
  );
}

export default App;
