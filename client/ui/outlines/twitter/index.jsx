import styled from "styled-components";
import _Twitter from "./twitter.svg";

export const Twitter = styled(_Twitter)`
  fill: transparent;

  .cls-2 {
    fill: ${p => p.theme.text};
  }
`;
