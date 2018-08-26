import styled from "styled-components";
import color from "tinycolor2";

export const ButtonSignIn = styled.button`
  color: ${p => p.theme.text};
  border: none;
  box-shadow: none;
  padding: 1rem 2rem;
  display: inline-block;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid ${p => String(color(p.theme.darkLighten).lighten(5))};
  transition: all 0.15s ease;

  &:hover {
    background-color: ${p => String(color(p.theme.darkLighten).lighten(5))};
    color: ${p => p.theme.accent};
  }
`;
