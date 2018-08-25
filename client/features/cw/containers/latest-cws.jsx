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
  font-size: 1.4rem;

  padding: 1rem;
`;
const Row = styled.tr``;
const Column = styled.td`
  width: 100%;
  text-align: center;
`;

const Badge = styled.div`
  padding: 0.3rem 0.5rem;
  border-radius: 0.3rem;
  background-color: ${p => p.bg || p.theme.darkLighten};
  color: ${p => p.color || p.theme.text};
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
`;

class LatestCws extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Body>
        <Header>latest clan wars</Header>
        <Content>
          <tbody>
            <Row>
              <Column>
                <Badge>DD</Badge>
              </Column>
              <Column>
                <Badge color="#99aa44">[FT]</Badge>
              </Column>
              <Column>
                <Badge bg="green">11:9</Badge>
              </Column>
            </Row>
            <Row>
              <Column>
                <Badge>Race</Badge>
              </Column>
              <Column>
                <Badge color="#884499">XtremeX</Badge>
              </Column>
              <Column>
                <Badge bg="red">113:70</Badge>
              </Column>
            </Row>
            <Row>
              <Column>
                <Badge>DD</Badge>
              </Column>
              <Column>
                <Badge color="#ffff55">eQ</Badge>
              </Column>
              <Column>
                <Badge bg="grey">10:10</Badge>
              </Column>
            </Row>
            <Row>
              <Column>
                <Badge>Tactics</Badge>
              </Column>
              <Column>
                <Badge color="#5555ff">Sc</Badge>
              </Column>
              <Column>
                <Badge bg="green">9:1</Badge>
              </Column>
            </Row>
          </tbody>
        </Content>
      </Body>
    );
  }
}

export { LatestCws };
