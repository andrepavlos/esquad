import React from "react";
import {
  compose,
  withHandlers,
  withState,
  lifecycle,
  withProps
} from "recompose";
import { connect } from "react-redux";
import { bus } from "@/bus";
import { signIn } from "../duck";
import { ButtonSignIn } from "../components/button-sign-in";
import { Form } from "../components/form";

function mapStateToProps({ features: { authentication } }) {
  return { authentication };
}

const enhance = compose(
  connect(mapStateToProps),
  withState("isFormShow", "showForm", false),
  withProps({
    start() {
      if (!this.isFormShow) {
        this.showForm(true);
        document.body.classList.add("hide-scroll");
      }
    },
    stop() {
      if (this.isFormShow) {
        this.showForm(false);
        document.body.classList.remove("hide-scroll");
      }
    }
  }),
  withHandlers({
    onStart: props => event => {
      props.start();
    },
    onStop: props => event => {
      props.stop();
    },
    onRegisterStart: props => event => {
      props.showForm(false);
      bus.emit("features:register:onStart");
    }
  }),
  lifecycle({
    componentDidMount() {
      bus.on("features:authentication:onStart", () => {
        this.props.start();
      });
    }
  })
);

const Authentication = enhance(props => (
  <div>
    {props.isFormShow && (
      <Form onStop={props.onStop} onRegisterStart={props.onRegisterStart} />
    )}
    <ButtonSignIn onClick={props.onStart}>Sign In</ButtonSignIn>
  </div>
));

export { Authentication };
