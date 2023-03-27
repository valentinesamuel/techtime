import { useState } from "react";
import SimpleCarousel from "react-simply-carousel";
import TestimonyCard from "../TestimonyCard/TestimonyCard.component";
import testimonies from "./Testimony.json";
type Props = {};

const Carousel = (props: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <SimpleCarousel
      containerProps={{
        style: {
          width: "100%",
          justifyContent: "space-between",
          userSelect: "none",
        },
      }}
      centerMode={true}
      swipeTreshold={60}
      activeSlideIndex={activeSlide}
      activeSlideProps={{
        style: {
          background: "blue",
        },
      }}
      onRequestChange={setActiveSlide}
      forwardBtnProps={{
        style: {
          display: "none",
        },
      }}
      backwardBtnProps={{
        style: {
          display: "none",
        },
      }}
      dotsNav={{
        show: true,
        
        itemBtnProps: {
          style: {
            height: 10,
            width: 10,
            borderRadius: "50%",
            border: 0,
            margin: "40px 3px",

            backgroundColor: "#CCDBF0",
          },
        },
        activeItemBtnProps: {
          style: {
            margin: "40px 3px",
            height: 10,
            width: 10,
            borderRadius: "50%",
            border: 0,
            backgroundColor: "#004DB3",
          },
        },
      }}
      itemsToShow={4}
      speed={10}
    >
      {testimonies.map((testimony) => {
        return (
          <TestimonyCard
            key={testimony.id}
            designation={testimony.designation}
            image={testimony.image}
            name={testimony.name}
            testimony={testimony.testimony}
          />
        );
      })}
    </SimpleCarousel>
  );
};

export default Carousel;
