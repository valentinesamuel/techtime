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

  @media screen and ${theme.device.md} {
    font-family: ${theme.fonts.familiy.satoshi};
    font-size: ${theme.fonts.size[14]};
    font-weight: ${theme.fonts.weight[900]};
    line-height: ${theme.fonts.lineHeight[19]};
  }
  `;

export const AccordionBody = styled.p`
  font-family: ${theme.fonts.familiy.satoshi};
  font-size: ${theme.fonts.size[16]};
  font-weight: ${theme.fonts.weight[500]};
  line-height: ${theme.fonts.lineHeight[26]};
  color: ${theme.colors.gray100};
  text-transform: capitalize;

  @media screen and ${theme.device.md} {
    font-family: ${theme.fonts.familiy.satoshi};
    font-size: ${theme.fonts.size[8]};
    font-weight: ${theme.fonts.weight[500]};
    line-height: ${theme.fonts.lineHeight[16]};
  }
`;

export const AccordionContainer = styled.div`
  max-width: 1037px;
  margin-bottom: 102px;

  @media screen and ${theme.device.md} {
    margin-bottom: 65px;
  }
`;
