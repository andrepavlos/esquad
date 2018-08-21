import "normalize.css";
import { injectGlobal } from "styled-components";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
`;
