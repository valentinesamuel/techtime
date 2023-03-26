import styled from "styled-components";
import { theme } from "../../utilities/designtokens";
//   @media screen and ${theme.device.md} {}

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  flex-direction: column;
`;

export const QuestionsHeader = styled.h3`
  font-family: ${theme.fonts.familiy.clashdisplay};
  font-size: ${theme.fonts.size[56]};
  font-weight: ${theme.fonts.weight[700]};
  line-height: ${theme.fonts.lineHeight[69]};
  padding-top: 80px;

  @media screen and ${theme.device.md} {
    font-size: ${theme.fonts.size[24]};
    line-height: ${theme.fonts.lineHeight[28]};
  }
`;

export const QuestionsDescription = styled.p`
  width: 743px;
  text-transform: capitalize;
  text-align: center;
  font-family: ${theme.fonts.familiy.satoshi};
  font-size: ${theme.fonts.size[16]};
  font-weight: ${theme.fonts.weight[500]};
  line-height: ${theme.fonts.lineHeight[28]};
  color: ${theme.colors.gray100};
  padding-bottom: 82px;

  @media screen and ${theme.device.md} {
    font-size: ${theme.fonts.size[8]};
    width: auto;
    line-height: ${theme.fonts.lineHeight[16]};
  }
`;

export const AccordionContainer = styled.div``;



export const QuestionSprinkles = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  @media screen and ${theme.device.md} {
  }
`;

export const YellowSquiggle = styled.img`
  position: absolute;
  top: 9rem;
  left: -1%;
  @media screen and ${theme.device.md} {
    transform: scale(0.6);
    left: -6%;
  }
`;
