import BrandBand from "./components/Brandband/Brandband.component";
import ClassFeature from "./components/ClassFeature/ClassFeature.component";
import Courses from "./components/Courses/Courses.component";
import Features from "./components/Features/Features.component";
import Footer from "./components/Footer/Footer.component";
import Hero from "./components/Hero/Hero.component";
import JoinCommunity from "./components/JoinCommunity/JoinCommunity.component";
import Navbar from "./components/Navbar/Navbar.component";
import Questions from "./components/Questions/Questions.component";
import Testimony from "./components/Testimony/Testimony.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <BrandBand />
      <ClassFeature />
      <Features />
      <Courses />
      <Testimony />
      <JoinCommunity />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
