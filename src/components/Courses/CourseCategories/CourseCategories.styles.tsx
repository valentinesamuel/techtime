import styled from "styled-components";
import { theme } from "../../../utilities/designtokens";

export const CourseCategoryContainer = styled.div`
  background-color: ${theme.colors.lightBlue50};
  .button {
    text-align: center;
    padding: 2rem 0;
  }

  @media screen and ${theme.device.md} {
    padding: 0px;
  }
`;

export const CourseCategoryTab = styled.div`
  display: flex;
  justify-content: center;
`;

export const Tab = styled.div`
  margin: 0 1.875rem;
  p {
    font-family: ${theme.fonts.familiy.satoshi};
    font-style: normal;
    font-weight: ${theme.fonts.weight[700]};
    font-size: ${theme.fonts.size[16]};
    line-height: ${theme.fonts.lineHeight[22]};
    text-transform: capitalize;
    padding: ${theme.paddings[10]} ${theme.paddings[16]};
    color: ${theme.colors.gray100};
    border-radius: ${theme.radii[4]};
    cursor: pointer;
  }

  &.isActive {
    p {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
    }
  }

  @media screen and ${theme.device.md} {
    margin: 0.25rem 0.5rem;
    p {
      font-size: ${theme.fonts.size[8]};
      line-height: ${theme.fonts.lineHeight[10]};
      padding: ${theme.paddings[4]} ${theme.paddings[8]};
      border-radius: ${theme.radii[2]};
    }
  }
`;

export const CourseCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  grid-gap: 24px;
  width: 100%;
  max-width: 100%;
  place-content: center;
  place-items: center;
  padding: 56px 0 40px 0;

  @media screen and ${theme.device.lg} {
    grid-gap: 8px;
    grid-template-columns: repeat(2, min-content);
  }
`;
