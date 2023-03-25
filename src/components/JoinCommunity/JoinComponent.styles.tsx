import styled from "styled-components";
import { theme } from "../../utilities/designtokens";

export const JoinCommunityContainer = styled.div`
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  padding: 86px 0 96px 0;

  @media screen and ${theme.device.md} {
    padding: 40px 26px;
  }
`;

export const JoinCommunitySubTitle = styled.p`
  text-transform: uppercase;
  font-family: ${theme.fonts.familiy.satoshi};
  font-size: ${theme.fonts.size[16]};
  font-weight: ${theme.fonts.weight[500]};
  line-height: ${theme.fonts.lineHeight[22]};
  letter-spacing: 0.1em;
  margin-bottom: 5px;

  @media screen and ${theme.device.md} {
    font-size: 8px;
    line-height: 11px;
  }
`;

export const JoinCommunityHeading = styled.h2`
  font-family: ${theme.fonts.familiy.clashdisplay};
  font-size: ${theme.fonts.size[56]};
  font-weight: ${theme.fonts.weight[700]};
  line-height: ${theme.fonts.lineHeight[69]};
  text-align: center;
  width: 1203px;

  @media screen and ${theme.device.md} {
    font-size: 24px;
    line-height: 30px;
    width: 336px;
  }
`;
export const JoinCommunityDescription = styled.p`
  font-family: ${theme.fonts.familiy.satoshi};
  font-size: ${theme.fonts.size[16]};
  font-weight: ${theme.fonts.weight[500]};
  line-height: ${theme.fonts.lineHeight[22]};
  @media screen and ${theme.device.md} {
    font-size: 8px;
    line-height: 11px;
    margin-bottom: 24px;
  }
`;

export const JoinCommunityImage = styled.img<{
  source: string;
  smallSourcee: string;
}>`
  content: url(${({ source }) => source});
  width: 983px;
  height: 519.74px;
  margin-bottom: 26px;

  @media screen and ${theme.device.md} {
    width: 100%;
    height: auto;
    content: url(${({ smallSourcee }) => smallSourcee});
  }
`;
