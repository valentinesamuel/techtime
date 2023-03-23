import styled from "styled-components";
import { theme } from "../../utilities/designtokens";

export const BrandBandContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.lightBlue100};

  display:flex;
  padding: ${theme.paddings[52]} 0;
 justify-content:center;

  @media screen and ${theme.device.md} {
    padding: ${theme.paddings[6]} 0;
  }
`;

export const BrandImage = styled.img`
  margin: 0 21px;
  height: auto;
  max-width: 100%;

  @media screen and ${theme.device.md} {
    margin: 0 5px;
    max-width: 15%;
  }
`;
