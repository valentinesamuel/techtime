import Carousel from "./Carousel/Carousel.component";
import {
  TestimonyContainer,
  TestimonyDescription,
  TestimonyHeading,
} from "./Testimony.styles";

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
      <Carousel></Carousel>
    </TestimonyContainer>
  );
};

export default Testimony;
