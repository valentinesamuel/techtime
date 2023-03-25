import styled from "styled-components";
import { theme } from "../../utilities/designtokens";

export const FeaturesContainer = styled.div`
  display: flex;
  position: relative;
  background-color: ${theme.colors.lightBlue50};
  align-items: center;
  justify-content: space-between;
  padding: ${theme.paddings[60]} ${theme.paddings[120]};
  overflow-x: hidden;

  @media screen and ${theme.device.md} {
    flex-direction: column;
    padding: 0 ${theme.paddings[22]};
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content;
  grid-gap: 24px;

  @media screen and ${theme.device.md} {
    margin-bottom: 40px;
    margin: ${theme.margins[32]};
    grid-gap: 8px;
  }
`;

export const TextContainer = styled.div``;

export const Heading = styled.h3`
  width: 694px;
  font-family: ${theme.fonts.familiy.clashdisplay};
  font-style: normal;
  font-weight: ${theme.fonts.weight[700]};
  font-size: ${theme.fonts.size[56]};
  line-height: ${theme.fonts.lineHeight[70]};
  text-transform: capitalize;
  margin-bottom: ${theme.margins[16]};

  @media screen and ${theme.device.md} {
    width: 100%;
    line-height: ${theme.fonts.lineHeight[30]};
    font-size: ${theme.fonts.size[24]};
  }
`;

export const Description = styled.div`
  width: 604px;
  font-family: ${theme.fonts.familiy.satoshi};
  font-style: normal;
  font-weight: ${theme.fonts.weight[500]};
  font-size: ${theme.fonts.size[16]};
  line-height: ${theme.fonts.lineHeight[28]};
  text-transform: capitalize;
  color: ${theme.colors.gray100};
  margin-bottom: ${theme.margins[32]};

  @media screen and ${theme.device.md} {
    width: 100%;
    font-size: ${theme.fonts.size[8]};
    line-height: ${theme.fonts.lineHeight[14]};
  }
`;

export const FeatureImage = styled.div`
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: ${theme.radii[30]};
  }
`;

export const Card = styled.div`
  //   max-width: 400px;
  padding: 24px;
  background-color: ${theme.colors.white};
  height: max-content;
  border-radius: ${theme.radii[8]};
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    margin-bottom: 24px;
  }

  h4 {
    font-family: ${theme.fonts.familiy.satoshi};
    font-style: normal;
    font-weight: ${theme.fonts.weight[700]};
    font-size: ${theme.fonts.size[16]};
    line-height: ${theme.fonts.lineHeight[22]};
    text-transform: capitalize;
  }

  p {
    width: 259px;
    font-family: ${theme.fonts.familiy.satoshi};
    font-style: ${theme.fonts.weight[500]};
    font-weight: 500;
    font-size: ${theme.fonts.size[12]};
    line-height: ${theme.fonts.lineHeight[22]};
    text-transform: capitalize;
    color: ${theme.colors.gray100};
  }

  @media screen and ${theme.device.md} {
    padding: 16px;
    img {
      margin-bottom: 0.5rem;
    }

    h4 {
      font-size: ${theme.fonts.size[12]};
    }

    p {
      width: 162px;
      font-size: ${theme.fonts.size[8]};
      line-height: ${theme.fonts.lineHeight[14]};
    }
  }
`;

export const Sprinkles = styled.div`
  height: 100%;
  width: fit-content;
  position: absolute;

  @media screen and ${theme.device.md} {
    // display: none;
  }
`;

export const YellowSquiggle = styled.img`
  position: relative;
  left: 1100px;
  bottom: -3%;
  @media screen and ${theme.device.md} {
    display: none;
  }
`;
export const PurpleCircle = styled.img`
  position: absolute;
  bottom: 6%;
  left: 84.5rem;
  @media screen and ${theme.device.md} {
    transform: scale(0.4);
    left: 9.5rem;
    bottom: 30%;
  }
`;
export const YellowDot = styled.img`
  position: absolute;
  top: 4%;
  left: 290px;
  @media screen and ${theme.device.md} {
    display: none;
  }
`;
export const GreenTriangle = styled.img`
  position: absolute;
  bottom: 20%;
  left: -140%;
  @media screen and ${theme.device.md} {
    transform: scale(0.4);
    left: -11rem;
    bottom: 7%;
  }
`;
1;
