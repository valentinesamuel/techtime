import arrowImage from "../../assets/images/spiral-arrow.svg";
import heroImage from "../../assets/images/hero-image.svg";
import arrowOutward from "../../assets/images/arrow_outward.svg";
import peopleReview from "../../assets/images/pople-previews.svg";
import greenCircle from "../../assets/images/hero-green-circle.svg";
import yellowCircle from "../../assets/images/yello-dot.svg";
import blueSquiggle from "../../assets/images/blue-squiggle.svg";
import Pattern from "../../assets/images/pattern-background.svg";

import {
  HeroContainer,
  HeroImage,
  Image,
  HeroText,
  SplineArrow,
  Heading,
  Description,
  GreenCirle,
  BlueSquiggle,
  YellowCircle,
  Preview,
  ButtonRow,
} from "./Hero.styles";
import Navbar from "../Navbar/Navbar.component";
import Button from "../Button/Button.component";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div style={{ backgroundColor: "brown" }}>
      <HeroContainer imageUrl={Pattern}>
        <HeroText>
          <GreenCirle src={greenCircle} alt="extras" />
          <BlueSquiggle src={blueSquiggle} alt="extras" />
          <YellowCircle src={yellowCircle} alt="extras" />
          <Heading>Grow your skills to advance your career path</Heading>
          <Description>
            Build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
          </Description>
          <ButtonRow>
            <Button role="outline" style={{ marginRight: "24px" }}>
              Get Started Now
              <img src={arrowOutward} style={{ marginLeft: "12px" }} />
            </Button>
            <Button role="secondary">Enroll Now</Button>
          </ButtonRow>
          <Preview src={peopleReview} />
        </HeroText>
        <HeroImage>
          <SplineArrow src={arrowImage} />
          <Image src={heroImage} />
        </HeroImage>
      </HeroContainer>
    </div>
  );
};

export default Hero;
