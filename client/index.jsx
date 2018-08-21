import "styles";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configure as configureStore } from "store";
import { Router } from "router";
import { Logo } from "ui/outlines/logo";

const App = () => (
  <Provider store={configureStore()}>
    <>
      <Logo />
      <Router />
    </>
  </Provider>
);

render(<App />, document.getElementById("app"));
