import styled from "styled-components";
import { theme } from "../../utilities/designtokens";
//   @media screen and ${theme.device.md} {}

export const TestimonyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.lightBlue50};
`;

export const TestimonyHeading = styled.h2`
  text-align: center;
  font-family: ${theme.fonts.familiy.clashdisplay};
  font-style: normal;
  font-weight: ${theme.fonts.weight[700]};
  font-size: ${theme.fonts.size[56]};
  line-height: ${theme.fonts.lineHeight[69]};

  @media screen and ${theme.device.md} {
    font-size: ${theme.fonts.size[24]};
    line-height: ${theme.fonts.lineHeight[30]};
  }
`;

export const TestimonyDescription = styled.p`
  width: 46.4375rem;
  font-family: ${theme.fonts.familiy.satoshi};
  font-style: normal;
  font-weight: ${theme.fonts.weight[500]};
  font-size: ${theme.fonts.size[16]};
  line-height: ${theme.fonts.lineHeight[28]};
  text-align: center;
  text-transform: capitalize;
  color: ${theme.colors.gray100};
  padding-bottom: ${theme.margins[56]};
  margin: 0 auto;

  @media screen and ${theme.device.md} {
    width: 17.6875rem;
    font-size: ${theme.fonts.size[8]};
    line-height: ${theme.fonts.lineHeight[16]};
    padding-bottom: ${theme.margins[16]};
  }
`;

export const TestimonySliderContainer = styled.div`
  height: 300px;
  width: 100%;
  margin-bottom: 30px;
`;

