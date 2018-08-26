import React from "react";
import styled from "styled-components";

const Body = styled.section`
  background-color: ${p => p.theme.dark};
`;

const Header = styled.header`
  background-color: ${p => p.theme.darkLighten};
  padding: 1rem 1rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
`;
const Content = styled.table`
  font-size: 1.3rem;
  padding: 1rem;
`;
const Row = styled.tr``;
const Column = styled.td`
  text-align: center;
  width: 100%;
`;

const Badge = styled.div`
  padding: 0.3rem 0.5rem;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
  color: ${p => (p.accent ? p.theme.accent : p.theme.text)};
`;

const ButtonPlay = styled.a`
  padding: 0.3rem 0.5rem;
  border-radius: 0.3rem;
  color: ${p => p.theme.accent};
  cursor: pointer;
  background-color: ${p => p.bg || p.theme.darkLighten};
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
`;

const ButtonCopy = styled.div`
  padding: 0.3rem 0.5rem;
  border-radius: 0.3rem;
  color: ${p => p.theme.accent};
  cursor: pointer;
  background-color: ${p => p.bg || p.theme.darkLighten};
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  width: 100px;
  max-width: 100%;
`;

class PlayServers extends React.Component {
  render() {
    return (
      <Body>
        <Header>Game Servers</Header>
        <Content>
          <tbody>
            <Row>
              <Column>
                <Badge>#1</Badge>
              </Column>
              <Column>
                <Badge>6/20</Badge>
              </Column>
              <Column>
                <ButtonCopy>copy ip</ButtonCopy>
              </Column>
              <Column>
                <ButtonPlay>play</ButtonPlay>
              </Column>
            </Row>
          </tbody>
        </Content>
      </Body>
    );
  }
}

export { PlayServers };
