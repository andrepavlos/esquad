import "normalize.css";
import { injectGlobal } from "styled-components";
import { theme } from "@/ui";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body, pre {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  body {
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    width: 0.9rem;
  }

  body::-webkit-scrollbar-track {
    background-color: ${theme.dark};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${theme.accent};
  }

  .hide-scroll {
    overflow-y: hidden;
  }
`;
