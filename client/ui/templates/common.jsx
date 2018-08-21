import React from "react";
import styled from "styled-components";
import { Authentication } from "features";
import { NavBar, SocialBar } from "../molecules";
import { Logo } from "../outlines";

const Body = styled.div`
  min-height: 100vh;
  background-color: ${p => p.theme.dark};
  display: flex;
  justify-content: center;
  color: ${p => p.theme.text};
`;

const Container = styled.section`
  max-width: 960px;
  width: 100%;
  box-shadow: 0 25px 10px #252525;
  background-color: ${p => p.theme.darkDarken};
`;

const Header = styled.header`
  padding: 2rem;
  background: linear-gradient(#444, #3c3c3c);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Logo} {
    height: 7rem;
  }
`;

export const CommonTemplate = props => (
  <Body>
    <Container>
      <Header>
        <Logo />
        <SocialBar />
        <Authentication />
      </Header>
      <NavBar />

      {props.children}
    </Container>
  </Body>
);
