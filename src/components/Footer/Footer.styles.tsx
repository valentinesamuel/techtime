import styled from "styled-components";
import { theme } from "../../utilities/designtokens";
import { NavLogo } from "../Navbar/Navbar.styles";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.white};
  background-color: #000f24;
  padding: 166px 120px 137px 120px;

  @media screen and ${theme.device.md} {
    flex-direction: column;
    padding: 40px 6px 164px 16px;
  }
`;

export const FT = styled(NavLogo)`
  @media screen and ${theme.device.md} {
    font-size: 36px;
  }
`;

export const FooterLogo = styled.div`
  p {
    font-family: ${theme.fonts.familiy.satoshi};
    font-size: ${theme.fonts.size[16]};
    font-weight: ${theme.fonts.weight[400]};
    line-height: ${theme.fonts.lineHeight[22]};
    text-align: left;
    width: 281px;
    margin-top: 26px;
  }
`;

export const Socials = styled.div`
  display: flex;
  margin-top: 24px;
  align-items:center;

  li {
    list-style-type: none;
    margin-right: 30px;
  }

  @media screen and ${theme.device.md} {
    margin-bottom: 50px;
  }
  `;
  
  export const Links = styled.div`
    margin-top: 34px;
    h5 {
      font-family: ${theme.fonts.familiy.clashdisplay};
      font-size: ${theme.fonts.size[32]};
      font-weight: ${theme.fonts.weight[500]};
      line-height: ${theme.fonts.lineHeight[30]};
      margin-bottom: 32px;
      @media screen and ${theme.device.md} {
        font-size: 24px;
        line-height: 30px;
      }
    }
    p {
      font-family: ${theme.fonts.familiy.satoshi};
      font-size: ${theme.fonts.size[24]};
      font-weight: ${theme.fonts.weight[400]};
      line-height: ${theme.fonts.lineHeight[30]};
      margin-bottom: 30px;
      @media screen and ${theme.device.md} {
        font-size: 16px;
        line-height: 22px;
      }
    }
  `;

export const Subscribe = styled.div`
  h5 {
    font-family: ${theme.fonts.familiy.clashdisplay};
    font-size: ${theme.fonts.size[32]};
    font-weight: ${theme.fonts.weight[500]};
    line-height: ${theme.fonts.lineHeight[30]};
    margin-bottom:32px;
  }

  .input {
    input {
      padding: 16px 100px 16px 21px;
      background-color: #2A2A2B ;
      color: #424141;
       1px solid #054FB3;
       border:none;
      //  height:100%;
    }
    button {
      border: none;
      color: ${theme.colors.white};
      padding: 16px 40px;
      background: ${theme.colors.primary};
      border-radius: 0px 2px 2px 0px;
    }
  }
    @media screen and ${theme.device.md} {
        margin-top:32px;
h5 {
    font-size: ${theme.fonts.size[24]};
    font-weight: ${theme.fonts.weight[600]};
    line-height: ${theme.fonts.lineHeight[28]};
    margin-bottom:24px;
  }
.input {
    input {
      padding: 16px 70px 16px 21px;
    }
    button {
      padding: 13px 15px;
      background: ${theme.colors.primary};
      border-radius: 0px 2px 2px 0px;
      font-size: 14px;
    }
  }
    }
`;
