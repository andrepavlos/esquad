import styled, { css } from "styled-components";
import color from "tinycolor2";

const fontSizeModifier = p => {
  if (p.small) {
    return css`
      font-size: 1.4rem;
    `;
  }

  if (p.big) {
    return css`
      font-size: 1.8rem;
    `;
  }

  return css`
    font-size: 1.6rem;
  `;
};

const paddingModifier = p => {
  if (p.small)
    return css`
      padding: 1rem 2rem;
    `;

  if (p.big)
    return css`
      padding: 1.5rem 3rem;
    `;

  return css`
    padding: 1.25rem 2.5rem;
  `;
};

const boxRadiusModifier = p => {
  if (p.rounded) {
    return css`
      border-radius: 0.5rem;

      &:hover {
        box-shadow: none;
      }
    `;
  }
};

const Button = styled.button`
  background-color: ${p => p.theme.darkLighten};
  color: ${p => p.theme.text};
  text-transform: uppercase;
  width: ${p => (p.wide ? "100%" : "auto")};
  border: none;
  box-shadow: none;
  cursor: pointer;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  color: ${p => p.theme.text};
  transition: all 0.15s ease;

  & span {
    font-weight: 700;
    color: ${p => p.theme.accent};
  }

  &:hover,
  &.active {
    color: ${p => p.theme.accent};
    background-color: ${p => String(color(p.theme.darkLighten).lighten(3))};
    box-shadow: inset 0 -2px 0 ${p => p.theme.accent}, 0 0 3px #333;
    position: relative;
    z-index: 1;
  }

  & > span {
    font-weight: 700;
    color: ${p => p.theme.accent};
  }

  ${paddingModifier};
  ${fontSizeModifier};
  ${boxRadiusModifier};
`;

export { Button };
