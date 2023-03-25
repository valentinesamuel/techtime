import styled from "styled-components";
import { theme } from "../../../utilities/designtokens";
//   @media screen and ${theme.device.md} {}

export const TestimonyCardContainer = styled.div`
padding:32px 24px;
background-color: ${theme.colors.white};
border-radius: 24px;
 width:min-content;

.testimony {
    width: 34.6875rem;
    font-family: ${theme.fonts.familiy.satoshi};
    font-size: ${theme.fonts.size[14]};
    font-weight: ${theme.fonts.weight[500]};
    line-height: ${theme.fonts.lineHeight[26]};
    color: ${theme.colors.gray100};
   display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .profile {
    align-items:center;
    display:flex;
    margin-top:20px;
    img {
      width: 48px;
      border-radius:50%;
      height: 48px;
      margin-right:2px;
    }

    .names {
      .name {
        font-family: ${theme.fonts.familiy.satoshi};
        font-style: normal;
        font-weight: ${theme.fonts.weight[700]};
        font-size: ${theme.fonts.size[14]};
        line-height: ${theme.fonts.lineHeight[19]};
        color: #000000;
      }
      .title {
        font-family: ${theme.fonts.familiy.satoshi};
        font-style: normal;
        font-weight: ${theme.fonts.weight[400]};
        font-size:   font-size: ${theme.fonts.size[12]};
        line-height:  ${theme.fonts.lineHeight[16]};
        text-transform: capitalize;
        color: #a1a1a1;
      }
    }
  }

  @media screen and ${theme.device.md} {
padding: 24px 16px;
border-radius: 16px;
 width:min-content;

.testimony {
    width: 18.75rem;
    font-size: ${theme.fonts.size[10]};
    line-height: ${theme.fonts.lineHeight[14]};
  }

  .profile {
    align-items:center;
    display:flex;
    margin-top:16px;
    img {
      width: 24px;
      height: 24px;

    }

    .names {
      .name {
        font-size: ${theme.fonts.size[10]};
        line-height: ${theme.fonts.lineHeight[14]};
      }
      .title {
        font-size:${theme.fonts.size[8]};
        line-height:  ${theme.fonts.lineHeight[11]};
      }
    }
  }

  }
`;
