import "@/styles";
import React from "react";
import { render } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { history, configure as configureStore } from "@/store";
import { Router } from "@/router";
import { theme } from "@/ui";

const store = configureStore();

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history} />
    </ThemeProvider>
  </ReduxProvider>
);

render(<App />, document.getElementById("app"));
