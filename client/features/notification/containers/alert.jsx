import React from "react";
import styled from "styled-components";
import { Danger as _Danger } from "ui";

const Danger = styled(_Danger)`
  width: 4.8rem;
  fill: ${p => p.theme.accent};
`;

const Alert = styled.div`
  background-color: ${p => p.theme.dark};
  padding: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  border: 2px solid ${p => p.theme.accent};
`;

const Text = styled.div`
  margin-left: 1rem;
  color: ${p => p.theme.text};
`;

class AlertWrapper extends React.Component {
  render() {
    return (
      <Alert {...this.props}>
        <Danger />
        <Text>Clan is closed</Text>
      </Alert>
    );
  }
}

export { AlertWrapper as Alert };
