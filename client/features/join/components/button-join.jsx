import React from "react";
import styled from "styled-components";
import color from "tinycolor2";

let ButtonJoin = props => (
  <button className={props.className}>
    <span>join</span> request
  </button>
);

ButtonJoin = styled(ButtonJoin)`
  background-color: ${p => p.theme.darkLighten};
  color: ${p => p.theme.text};
  padding: 1rem;
  text-transform: uppercase;
  width: 100%;
  border: none;
  box-shadow: none;
  cursor: pointer;

  padding: 1.25rem 2.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  color: ${p => p.theme.text};
  transition: all 0.15s ease;

  & span {
    font-weight: 700;
    color: ${p => p.theme.accent};
  }

  &:hover {
    color: ${p => p.theme.accent};
    background-color: ${p => String(color(p.theme.darkLighten).lighten(3))};
    box-shadow: inset 0 -2px 0 ${p => p.theme.accent}, 0 0 3px #333;
    position: relative;
    z-index: 1;
  }
`;

export { ButtonJoin };
