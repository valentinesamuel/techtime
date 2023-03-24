import styled from "styled-components";
import { theme } from "../../utilities/designtokens";

export const ButtonContainer = styled.button<{
  role: "primary" | "secondary" | "outline";
}>`
  padding: ${theme.paddings[16]} ${theme.paddings[32]};
  outline: none;
  border: none;
  background-color: ${({ role }) =>
    role === "primary"
      ? `${theme.colors.primary}`
      : role === "secondary"
      ? `${theme.colors.white}`
      : role === "outline"
      ? "transparent"
      : `${theme.colors.white}`};
  color: ${({ role }) =>
    role === "primary"
      ? "white"
      : role === "secondary"
      ? `${theme.colors.primary}`
      : role === "outline"
      ? `${theme.colors.white}`
      : `${theme.colors.white}`};
  font-family: ${theme.fonts.familiy.satoshi};
  font-weight: ${theme.fonts.weight[700]};
  line-height: ${theme.fonts.lineHeight[10]};
  radius: ${theme.radii[4]};
  border: ${({ role }) =>
    role === "primary"
      ? "none"
      : role === "secondary"
      ? "none"
      : role === "outline"
      ? `.0625rem solid ${theme.colors.white}`
      : "none"};

  @media screen and ${theme.device.md} {
    padding: ${theme.paddings[8]} ${theme.paddings[16]};
    font-size: 15px;
  }
`;
