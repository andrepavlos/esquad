import React from "react";
import styled, { css } from "styled-components";
import { Link } from "../atoms";
import color from "tinycolor2";

const Container = styled.nav`
  display: flex;
  width: 100%;
  z-index: 2;
  position: relative;
  box-shadow: 0 -0.3rem 0.5rem #383838;
`;

const LinkButton = styled(Link).attrs({
  activeClassName: "link-button_active"
})`
  padding: 1.25rem 2.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  color: ${p => p.theme.text};
  transition: all 0.15s ease;

  &.${p => p.activeClassName}, &:hover {
    color: ${p => p.theme.accent};
    background-color: ${p => String(color(p.theme.darkLighten).lighten(3))};
    box-shadow: inset 0 -2px 0 ${p => p.theme.accent}, 0 0 3px #333;
    position: relative;
    z-index: 1;
  }
`;

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
