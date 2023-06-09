import ClassImg from "../../assets/images/class-hero-image.svg";
import Crown from "../../assets/images/crown.svg";
import greensquiggle from "../../assets/images/green-squiggle.svg";
import bluedots from "../../assets/images/blue-dots.svg";
import purpleEllipse from "../../assets/images/big-purple-elllipse.svg";
import audio from "../../assets/images/audio-icon.svg";
import record from "../../assets/images/record-icon.svg";
import liveClass from "../../assets/images/live-class-icon.svg";
import notes from "../../assets/images/notes-icon.svg";

import {
  BlueDotCluster,
  ClassFeatureContainer,
  ClassFeatureImageContainer,
  ClassFeatureTextContainer,
  ClassImage,
  Description,
  FeatureTag,
  FeatureTagContainer,
  Heading,
  PurpleEllipse,
  GreenSquiggle,
} from "./ClassFeature.styles";
import Button from "../Button/Button.component";
import { Sprinkle } from "../Sprinkles/Sprinkles.styles";

type Props = {};

const ClassFeature = (props: Props) => {
  return (
    <ClassFeatureContainer>
      <ClassFeatureTextContainer>
        <Heading>
          <img src={Crown} />
          <h3>High quality video, audio & live classes</h3>
        </Heading>
        <Description>
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, Generally any standard video image
        </Description>
        <Button role="primary">View Courses</Button>
        <FeatureTagContainer>
          <div>
            <FeatureTag>
              <img src={audio} />
              <p>Audio Classes</p>
            </FeatureTag>
            <FeatureTag>
              <img src={liveClass} />
              <p>Live Classes</p>
            </FeatureTag>
          </div>
          <div>
            <FeatureTag>
              <img src={record} />
              <p>Recorded Classes</p>
            </FeatureTag>
            <FeatureTag>
              <img src={notes} />
              <p>50+ Notes</p>
            </FeatureTag>
          </div>
        </FeatureTagContainer>
      </ClassFeatureTextContainer>
      <ClassFeatureImageContainer>
        <ClassImage src={ClassImg} />
      </ClassFeatureImageContainer>
      <Sprinkle>
        <PurpleEllipse src={purpleEllipse} />
        <GreenSquiggle src={greensquiggle} />
        <BlueDotCluster src={bluedots} />
      </Sprinkle>
    </ClassFeatureContainer>
  );
};
{
}

export default ClassFeature;
