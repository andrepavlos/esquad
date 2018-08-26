import React from "react";

import {
  compose,
  withProps,
  withHandlers,
  withState,
  lifecycle
} from "recompose";

import { bus } from "@/bus";
import { Form } from "../components/form";

const enhance = compose(
  withState("isFormShow", "showForm", false),
  withProps({
    start() {
      this.showForm(true);
      document.body.classList.add("hide-scroll");
    },
    stop() {
      this.showForm(false);
      document.body.classList.remove("hide-scroll");
    }
  }),
  withHandlers({
    onStop: props => ev => {
      props.stop();
    },
    onSignInStart: props => ev => {
      props.stop();
      bus.emit("features:authentication:onStart");
    }
  }),
  lifecycle({
    componentDidMount() {
      bus.on("features:register:onStart", () => {
        this.props.start();
      });
    }
  })
);

const Register = enhance(props => (
  <>
    {props.isFormShow && (
      <Form onStop={props.onStop} onSignInStart={props.onSignInStart} />
    )}
  </>
));

export { Register };
