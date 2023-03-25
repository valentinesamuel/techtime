import styled from "styled-components";
import { theme } from "../../../utilities/designtokens";

export const CardContainer = styled.div`
  padding: ${theme.paddings[20]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.paddings[16]};
  width:min-content;
  @media screen and ${theme.device.md} {

    padding: ${theme.paddings[16]} ${theme.paddings[8]};
    border-radius: ${theme.paddings[4]};
  }
`;

export const CourseImage = styled.img`
  height: 18.2919rem;
  width: 27.4375rem;
  border-radius: ${theme.radii[4]};
  margin-bottom: ${theme.margins[16]};

  @media screen and ${theme.device.md} {
    width: 170.8192px;
    height: 117.88px;
    border-radius: ${theme.radii[2]};
  }
`;

export const Tags = styled.div`
  margin-bottom: ${theme.margins[24]};
  display: flex;
  justify-content: space-between;
  .tag {
    background-color: #1e5dce33;
    border-radius: 16px;
    padding: ${theme.paddings[4]} ${theme.paddings[20]};
    p {
      font-family: ${theme.fonts.familiy.satoshi};
      font-style: normal;
      font-weight: ${theme.fonts.weight[700]};
      font-size: ${theme.fonts.size[12]};
      line-height: ${theme.fonts.lineHeight[14]};
      text-transform: capitalize;
      color: ${theme.colors.blue100};
    }
  }

  .rating {
    display: flex;
    align-items: center;

    p {
      color: ${theme.colors.gray100};
      font-family: ${theme.fonts.familiy.satoshi};
      font-weight: ${theme.fonts.weight[700]};
      font-size: ${theme.fonts.size[12]};
      line-height: ${theme.fonts.lineHeight[14]};
    }
  }

  @media screen and ${theme.device.md} {
    margin-bottom: ${theme.margins[8]};
    .tag {
      border-radius: 0.25rem;
      padding: ${theme.paddings[2]} ${theme.paddings[8]};
      p {
        font-size: ${theme.fonts.size[4]};
        line-height: ${theme.fonts.lineHeight[5]};
      }
    }
    .rating p {
      font-size: ${theme.fonts.size[4]};
      line-height: ${theme.fonts.lineHeight[5]};
    }
  }
`;

export const CourseTitle = styled.h3`
  width: 24.125rem;

  margin-bottom: ${theme.margins[16]};
  font-family: ${theme.fonts.familiy.clashdisplay};
  font-style: normal;
  font-weight: ${theme.fonts.weight[600]};
  font-size: ${theme.fonts.size[24]};
  line-height: ${theme.fonts.lineHeight[30]};

  @media screen and ${theme.device.md} {
    width: 9.7169rem;
    margin-bottom: ${theme.margins[4]};
    font-size: ${theme.fonts.size[8]};
    line-height: ${theme.fonts.lineHeight[10]};
  }
`;

export const CourseLength = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.margins[32]};

  .duration,
  .lessons {
    display: flex;
    align-items:center;
  }

  .duration p,
  .lessons p {
    color: ${theme.colors.gray100};
    font-family: ${theme.fonts.familiy.satoshi};
    font-style: normal;
    font-weight: ${theme.fonts.weight[500]};
    font-size: ${theme.fonts.size[16]};
    line-height: ${theme.fonts.lineHeight[22]};
    margin-left: ${theme.margins[8]};
  }

  @media screen and ${theme.device.md} {
    margin-bottom: ${theme.margins[16]};

    .lessons img {
      // transform: scale(0.4);
    }

    .duration p,
    .lessons p {
      font-size: ${theme.fonts.size[4]};
      line-height: ${theme.fonts.lineHeight[5]};
      margin-left: 0.125rem;
    }
  }
`;

export const CourseInstructor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .instructor {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    p {
      margin-left: ${theme.margins[8]};
      font-family: ${theme.fonts.familiy.satoshi};
      font-style: normal;
      font-weight: ${theme.fonts.weight[700]};
      font-size: ${theme.fonts.size[16]};
      line-height: ${theme.fonts.lineHeight[22]};
    }
  }

  .price {
    p {
      font-family: ${theme.fonts.familiy.clashdisplay};
      font-style: normal;
      font-weight: ${theme.fonts.weight[500]};
      line-height: ${theme.fonts.lineHeight[26]};
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size[20]};
    }
  }

  @media screen and ${theme.device.md} {
    .instructor img {
      width: 16px;
      height: 16px;
    }
    .instructor p {
      font-size: ${theme.fonts.size[8]};
      line-height: ${theme.fonts.lineHeight[8]};
    }
    .price {
      p {
        font-weight: ${theme.fonts.weight[600]};
        font-size: ${theme.fonts.size[8]};
        line-height: ${theme.fonts.lineHeight[8]};
      }
    }
  }
`;

export const CourseLengthImages = styled.img<{
  imgUrl: string;
  smallimg: string;
}>`
  content: url(${({ imgUrl }) => imgUrl});
  height: auto;
  max-width: 100%;

  @media screen and ${theme.device.md} {
    height: 7px;
    content: url(${({ smallimg }) => smallimg});
  }
`;
