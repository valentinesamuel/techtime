import styled from "styled-components";
import { theme } from "../../utilities/designtokens";

export const HeroContainer = styled.div<{ imageUrl: string }>`
  display: flex;
  justify-content: space-between;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-color: ${theme.colors.primary};
  @media screen and ${theme.device.md} {
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding:0 22px;
  }
`;

export const HeroText = styled.div`
  position: relative;
  margin-top: 133px;
  margin-left: ${theme.margins[120]};

  @media screen and ${theme.device.md} {
    margin-left: 0;
    margin-top: 28px;
  }
`;

export const Heading = styled.h1`
  font-size: ${theme.fonts.size[64]};
  font-weight: ${theme.fonts.weight[700]};
  font-family: ${theme.fonts.familiy.clashdisplay};
  line-height: ${theme.fonts.lineHeight[82]};
  width: 698px;
  color: ${theme.colors.white};
  margin-bottom: ${theme.margins[16]};

  @media screen and ${theme.device.md} {
    line-height: ${theme.fonts.lineHeight[30]};
    font-size: ${theme.fonts.size[25]};
    width: 100%;
  }
`;

export const Description = styled.p`
  width: 633px;
  font-family: ${theme.fonts.familiy.satoshi};
  font-weight: ${theme.fonts.weight[500]};
  font-size: ${theme.fonts.size[16]};
  line-height: ${theme.fonts.lineHeight[26]};
  color: ${theme.colors.lightBlue};
  margin-bottom: ${theme.margins[32]};

  @media screen and ${theme.device.md} {
    line-height: ${theme.fonts.lineHeight[14]};
    font-size: 12px;
    width: 100%;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  width:100%:
  `;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;

  @media screen and ${theme.device.md} {
    margin-top: 60px;
  }
`;

export const SplineArrow = styled.img`
  position: absolute;
  top: 24.5rem;
  right: 95%;
  @media screen and ${theme.device.md} {
    transform: scale(0.4) rotate(65deg);
    top: -17%;
    right: -8%;
  }
`;

export const Preview = styled.img`
  margin-top: 1.5rem;
  @media screen and ${theme.device.md} {
    width: 100%;
    height: 2rem;
  }
`;

export const GreenCirle = styled.img`
  position: absolute;
  left: 4%;
  top: -12%;
  @media screen and ${theme.device.md} {
    display: none;
  }
`;
export const BlueSquiggle = styled.img`
  position: absolute;
  top: 43%;
  left: -130px;
`;

export const YellowCircle = styled.img`
  position: absolute;
  left: 77%;
  top: -10%;
  @media screen and ${theme.device.md} {
    display: none;
  }
`;

export const ButtonRow = styled.div`
  display: "flex";
`;
