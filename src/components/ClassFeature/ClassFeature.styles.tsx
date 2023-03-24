import styled from "styled-components";
import { theme } from "../../utilities/designtokens";

export const ClassFeatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8f9fc;
`;

export const ClassFeatureTextContainer = styled.div``;

export const ClassFeatureImageContainer = styled.div``;

export const FeatureTagContainer = styled.div`
  height: match-content; ;
`;

export const Heading = styled.div`
  // padding-left:10%;
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
  font-weight: 500;
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
  width: fit-content;

  p {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    margin-left: ${theme.margins[16]};
    color: #000f24;
  }
`;

export const ClassMainImage = styled.div`
  position: relative;
  overflow: hidden;
  padding-right: 120px;
`;

export const ClassImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ClassImage = styled.img`
  //   z-index: 3;
`;

export const PurpleEllipse = styled.img`
  position: absolute;
  right: -12%;
  bottom: 10%;
`;

export const BlueDotCluster = styled.img`
  position: absolute;
  bottom: 2rem;
  right: 2%;
  z-index: -1;
`;

export const GreenSquiggle = styled.img`
  position: absolute;
  right: -5%;
  top: 20%;
`;
