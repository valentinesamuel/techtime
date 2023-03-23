import styled from "styled-components";
import { theme } from "../../utilities/designtokens";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: ${theme.colors.white};
  padding: ${theme.paddings[48]} ${theme.paddings[120]};

  @media screen and ${theme.device.md} {
    padding: ${theme.paddings[40]} ${theme.paddings[20]} ${theme.paddings[13]}
      ${theme.paddings[13]};
  }
`;
export const NavLogo = styled.h5`
  font-family: "amazing-kids";
  font-weight: ${theme.fonts.weight[400]};
  font-size: ${theme.fonts.size[47]};
  line-height: ${theme.fonts.lineHeight[47]};
  text-transform: capitalize;

  @media screen and ${theme.device.md} {
    font-size: ${theme.fonts.size[25]};
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;

  @media ${theme.device.sm} {
    font-size: 32px;
  }
`;

export const DesktopMenu = styled.ul`
display:flex;
align-items:center;
li{
    list-style-type:none;
    padding: ${theme.paddings[16]} 0 ${theme.paddings[12]} ${theme.paddings[16]};

    p{
        font-size:${theme.fonts.size[1]};
        font-weight: ${theme.fonts.weight[700]};
       font-family: ${theme.fonts.familiy.satoshi};
       color: #AAC4E6;

       &.active-link{
        color:#FFFFFF;
      }
    }

     @media screen and  ${theme.device.md} {
   display:none;
  
};
  }
}

`;

export const HamburgerMenuToggler = styled.div<{ navbarStatus: boolean }>`
  display: none;

  @media screen and ${theme.device.md} {
    background-color: ${({ navbarStatus }) => (!navbarStatus ? "red" : "gray")};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 6px 3px;

    span {
      height: 0.18rem;
      width: 25px;
      margin: 1.5px 0;
      display: block;
      background-color: white;
    }
  }
`;

export const MobileMenu = styled.nav`
  display: none;
  background-color: #004db3;
  text-align:center;
  padding-top: 4rem;

  @media screen and ${theme.device.md} {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    li {
      list-style-type: none;
      padding: ${theme.paddings[16]} ${theme.paddings[12]};
      p {
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size[1]};
        font-weight: ${theme.fonts.weight[700]};
        font-family: ${theme.fonts.familiy.satoshi};
      }
    }
  }
`;
