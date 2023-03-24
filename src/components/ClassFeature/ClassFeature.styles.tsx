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
`;

export const ClassFeatureTextContainer = styled.div``;

export const ClassFeatureImageContainer = styled.div``;

export const FeatureTagContainer = styled.div``;

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
`;

export const ClassMainImage = styled.div`
  position: relative;
  width: auto;
`;

export const ClassImage = styled.img`
  // max-width: 100%;
  transform: scale(0.9);
  position: relative;
  right: 20%;
  top: 55px;
  height: auto;
  z-index: 2;
`;

export const PurpleEllipse = styled.img`
  position: absolute;
  bottom: 12%;
  right: -5%;
`;

export const BlueDotCluster = styled.img`
  position: absolute;
  bottom: 19%;
  right: 8%;
`;

export const GreenSquiggle = styled.img`
  position: absolute;
  right: -2%;
  top: 20%;
`;

export const Sprinkles = styled.div`
  height: 100%,
width: 100%,
position: absolute,
`;
