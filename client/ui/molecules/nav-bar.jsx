import React from "react";
import styled from "styled-components";
import { Link, Button } from "../atoms";
import color from "tinycolor2";

const Container = styled.nav`
  display: flex;
  width: 100%;
  z-index: 2;
  position: relative;
  box-shadow: 0 -0.3rem 0.5rem #383838;
`;

const LinkButton = styled(Button.withComponent(Link)).attrs({
  activeClassName: "active"
})``;

export const NavBar = styled(props => (
  <Container className={props.className}>
    <LinkButton to="/">Home</LinkButton>
    <LinkButton to="/members">Members</LinkButton>
    <LinkButton to="/cws">Clan Wars</LinkButton>
    <LinkButton to="/forum">Forum</LinkButton>
  </Container>
))`
  background-color: ${p => p.theme.darkLighten};
`;
