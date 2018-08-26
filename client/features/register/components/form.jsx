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
        <Title>Register</Title>
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

        <LabelBlock>
          <Label>Repeat Password</Label>
          <Input type="password" placeholder="your password" />
        </LabelBlock>

        <Notice>
          Already have an account?{" "}
          <span onClick={props.onSignInStart}>Sign In</span>
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
