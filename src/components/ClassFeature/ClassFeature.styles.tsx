import styled from "styled-components";
import { theme } from "../../utilities/designtokens";

export const ClassFeatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.lightBlue50};
  padding: ${theme.paddings[90]} ${theme.paddings[166]};
  position: relative;
  overflow-x: hidden;

  @media screen and ${theme.device.md} {
    padding: 0 ${theme.paddings[22]};
    text-align: center;
    flex-direction: column;
    overflow: hidden;
    padding-bottom:${theme.paddings[40]};
  }
`;

export const ClassFeatureTextContainer = styled.div``;

export const ClassFeatureImageContainer = styled.div``;

export const FeatureTagContainer = styled.div`
  div {
    display: flex;
    margin-top: 1.5rem;
  }
  @media screen and ${theme.device.md} {
    div {
      justify-content: center;
      margin-top: 0.75rem;
    }
  }
`;

export const Heading = styled.div`
  position: relative;

  h3 {
    font-size: ${theme.fonts.size[56]};
    font-weight: ${theme.fonts.weight[700]};
    font-family: ${theme.fonts.familiy.clashdisplay};
    line-height: ${theme.fonts.lineHeight[70]};
    width: 45rem;
    margin-bottom: ${theme.margins[16]};
  }

  img {
    position: relative;
    top: 1.1rem;
    right: 5.4%;
  }

  @media screen and ${theme.device.md} {
    h3 {
      width: 100%;
      font-size: ${theme.fonts.size[24]};
      line-height: ${theme.fonts.lineHeight[30]};
      text-transform: capitalize;
    }
    img {
      transform: scale(0.7);
      left: -45%;
      top: 1.3rem;
    }
  }
`;

export const Description = styled.p`
  width: 37.75rem;
  font-family: ${theme.fonts.familiy.satoshi};
  font-weight: ${theme.fonts.weight[500]};
  font-size: ${theme.fonts.size[16]};
  line-height: ${theme.fonts.lineHeight[28]};
  color: ${theme.colors.gray100};
  text-transform: capitalize;
  margin-bottom: ${theme.margins[32]};

  @media screen and ${theme.device.md} {
    width: 100%;
    line-height: ${theme.fonts.lineHeight[14]};
    font-size: ${theme.fonts.size[8]};
  }
`;

export const FeatureTag = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${theme.margins[24]};
  background-color: ${theme.colors.white};
  padding: ${theme.paddings[25]} ${theme.paddings[52]} ${theme.paddings[25]}
    ${theme.paddings[25]};
  border-radius: ${theme.radii[8]};

  p {
    font-family: ${theme.fonts.familiy.satoshi};
    font-weight: ${theme.fonts.weight[700]};
    font-size: ${theme.fonts.size[16]};
    line-height: ${theme.fonts.lineHeight[22]};
    text-transform: capitalize;
    margin-left: ${theme.margins[16]};
  }

  @media screen and ${theme.device.md} {
    margin-right: ${theme.margins[13]};
    padding: ${theme.paddings[8]} ${theme.paddings[16]} ${theme.paddings[8]}
      ${theme.paddings[16]};

    img {
      transform: scale(0.7);
    }

    p {
      margin-left: ${theme.margins[8]};
      font-size: ${theme.fonts.size[8]};
      line-height: ${theme.fonts.lineHeight[10]};
    }
  }
`;

export const ClassMainImage = styled.div`
  position: relative;
  width: auto;
`;

export const ClassImage = styled.img`
  transform: scale(0.9);
  position: relative;
  right: 20%;
  top: 55px;
  height: auto;
  z-index: 2;

  @media screen and ${theme.device.md} {
    max-width: 100%;
    transform: scale(1);
    right: 0%;
    top: 30px;
  }
`;

export const PurpleEllipse = styled.img`
  position: absolute;
  bottom: 12%;
  right: -5%;

  @media screen and ${theme.device.md} {
    transform: scale(0.6);
    right: -29%;
  }
`;

export const BlueDotCluster = styled.img`
  position: absolute;
  bottom: 19%;
  right: 8%;

  @media screen and ${theme.device.md} {
    transform: scale(0.3);
    bottom: -3%;
    right: -13%;
  }
`;

export const GreenSquiggle = styled.img`
  position: absolute;
  right: -9%;
  top: 40%;
  @media screen and ${theme.device.md} {
    transform: scale(0.7);
  }
`;

export const Sprinkles = styled.div`
  height: 100%,
width: 100%,
position: absolute,
`;
