import styled from "styled-components";
import { theme } from "../../../utilities/designtokens";

export const AccordionHeading = styled.h3`
  font-family: ${theme.fonts.familiy.satoshi};
  font-size: ${theme.fonts.size[24]};
  font-weight: ${theme.fonts.weight[900]};
  line-height: ${theme.fonts.lineHeight[32]};

  &.open {
    color: ${theme.colors.primary};
  }
`;

export const AccordionBody = styled.p`
  font-family: ${theme.fonts.familiy.satoshi};
  font-size: ${theme.fonts.size[16]};
  font-weight: ${theme.fonts.weight[500]};
  line-height: ${theme.fonts.lineHeight[26]};
  color: ${theme.colors.gray100};
  text-transform: capitalize;
`;

export const AccordionContainer = styled.div`
  max-width: 1037px;
  margin-bottom:102px;
`;
