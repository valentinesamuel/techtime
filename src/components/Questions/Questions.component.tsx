import React from "react";
import {
  AccordionContainer,
  QuestionsContainer,
  QuestionsDescription,
  QuestionsHeader,
  QuestionSprinkles,
  YellowSquiggle,
} from "./Questions.styles";
import yellowsquiggle from "../../assets/images/yellow-squiggle.svg";
import AccordionComponent from "./Accordion/AccordionComponent.component";

type Props = {};

const Questions = (props: Props) => {
  return (
    <QuestionsContainer>
      <QuestionSprinkles>
        <YellowSquiggle src={yellowsquiggle} />
      </QuestionSprinkles>
      <QuestionsHeader>Frequestly Asked Questions</QuestionsHeader>
      <QuestionsDescription>
        high-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </QuestionsDescription>
     <AccordionComponent/>
    </QuestionsContainer>
  );
};

export default Questions;
