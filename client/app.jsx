import "normalize.css";
import React from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";
import { Logo } from "ui/outlines/logo";

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

const App = () => (
  <div>
    <Logo />
    <div>App</div>
  </div>
);

render(<App />, document.getElementById("app"));
