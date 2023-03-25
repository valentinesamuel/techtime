import styled from "styled-components";
import { theme } from "../../utilities/designtokens";

export const CoursesContainer = styled.div`
  padding: 80px 120px 20px 120px;
  background-color: ${theme.colors.lightBlue50};

  @media screen and ${theme.device.md} {
    padding: 0;
  }
`;

export const CoursesHeading = styled.h1`
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

export const CoursesDescription = styled.p`
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

export const BlueCross = styled.img`
  position: absolute;
  top: 13%;
  left: 7%;
  @media screen and ${theme.device.md} {
    left: -50%;
    top: -4rem;
  }
`;

export const CoursesSprinkles = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  @media screen and ${theme.device.md} {
    transform: scale(0.5);
  }
`;
