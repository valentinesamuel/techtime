import React from "react";
import {
  TestimonyContainer,
  TestimonyDescription,
  TestimonyHeading,
  TestimonySliderContainer,
} from "./Testimony.styles";
import TestimonyCard from "./TestimonyCard/TestimonyCard.component";

type Props = {};

const Testimony = (props: Props) => {
  return (
    <TestimonyContainer>
      <TestimonyHeading>What Our Clients Are Saying</TestimonyHeading>
      <TestimonyDescription>
        high-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </TestimonyDescription>
      <TestimonySliderContainer>
        <TestimonyCard />
      </TestimonySliderContainer>
    </TestimonyContainer>
  );
};

export default Testimony;
