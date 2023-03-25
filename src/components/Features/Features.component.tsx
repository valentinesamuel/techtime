import laptopView from "../../assets/images/looking-at-laptop.svg";
import mentor from "../../assets/images/mentors.svg";
import meeting from "../../assets/images/meetings.svg";
import users from "../../assets/images/groups.svg";
import price from "../../assets/images/prices.svg";
import yellowSquiggle from "../../assets/images/yellow-squiggle.svg";
import purpleCirle from "../../assets/images/purple-circle.svg";
import yellowDot from "../../assets/images/yello-dot.svg";
import greenTriangle from "../../assets/images/green-traingle.svg";

import {
  Card,
  CardsContainer,
  Description,
  FeatureImage,
  FeaturesContainer,
  GreenTriangle,
  Heading,
  PurpleCircle,
  FeatureSprinkles,
  TextContainer,
  YellowDot,
  YellowSquiggle,
} from "./Features.styles";

type Props = {};

const Features = (props: Props) => {
  return (
    <FeaturesContainer>
      <TextContainer>
        <Heading>this is why we are best from others</Heading>
        <Description>
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </Description>
        <FeatureImage>
          <img src={laptopView} />
        </FeatureImage>
      </TextContainer>
      <CardsContainer>
        <Card>
          <img src={mentor} />
          <h4>Experienced Mentors</h4>
          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition.{" "}
          </p>
        </Card>
        <Card>
          <img src={meeting} />
          <h4>Experienced Mentors</h4>
          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition.{" "}
          </p>
        </Card>
        <Card>
          <img src={users} />
          <h4>Experienced Mentors</h4>
          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition.
          </p>
        </Card>
        <Card>
          <img src={price} />
          <h4>Experienced Mentors</h4>
          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition.
          </p>
        </Card>
      </CardsContainer>
      <FeatureSprinkles>
        <YellowSquiggle src={yellowSquiggle} />
        <YellowDot src={yellowDot} />
        <PurpleCircle src={purpleCirle} />
        <GreenTriangle src={greenTriangle} />
      </FeatureSprinkles>
    </FeaturesContainer>
  );
};

export default Features;
