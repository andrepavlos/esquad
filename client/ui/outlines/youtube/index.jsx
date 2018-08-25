import styled from "styled-components";
import _Youtube from "./youtube.svg";

export const Youtube = styled(_Youtube)`
  & path {
    fill: ${p => p.theme.text};
  }
`;
