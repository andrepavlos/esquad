import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { RootRoute } from "pages/root";

export const Router = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>{RootRoute}</Switch>
  </ConnectedRouter>
);
