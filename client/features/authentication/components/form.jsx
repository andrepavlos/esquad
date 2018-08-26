import React from "react";
import { Form as _Form, ShadedBackground as Background } from "@/ui";

const {
  Shell,
  Header,
  Body,
  Title,
  Input,
  LabelBlock,
  Label,
  ButtonBlock,
  Button,
  Notice
} = _Form;

export const Form = props => (
  <Background>
    <Shell onSubmit={ev => ev.preventDefault()}>
      <Header>
        <Title>Sign in</Title>
      </Header>

      <Body>
        <LabelBlock>
          <Label>Nickname</Label>
          <Input type="text" placeholder="your nickname" />
        </LabelBlock>

        <LabelBlock>
          <Label>Password</Label>
          <Input type="password" placeholder="your password" />
        </LabelBlock>

        <Notice>
          Don't have an account?{" "}
          <span onClick={props.onRegisterStart}>Register</span>
        </Notice>

        <ButtonBlock>
          <Button small>Submit</Button>
          <Button small onClick={props.onStop}>
            Cancel
          </Button>
        </ButtonBlock>
      </Body>
    </Shell>
  </Background>
);
