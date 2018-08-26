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
`;
