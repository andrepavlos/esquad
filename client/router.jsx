import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RootRoute } from "pages/root";

export const Router = () => (
  <BrowserRouter>
    <Switch>{RootRoute}</Switch>
  </BrowserRouter>
);
