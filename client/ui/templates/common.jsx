import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Authentication } from "@/features/authentication";
import { Register } from "@/features/register";
import { JoinRequest } from "@/features/join";
import { CwRequest, LatestCws } from "@/features/cw";
import { Alert } from "@/features/notification";
import { PlayServers } from "@/features/monitoring";
import { NavBar, SocialBar, Footer } from "../molecules";
import { Logo } from "../outlines";
import { About } from "../atoms";

const Body = styled.div`
  min-height: 100vh;
  background-color: ${p => p.theme.dark};
  display: flex;
  justify-content: center;
  color: ${p => p.theme.text};
`;

const Container = styled.section`
  max-width: 96rem;
  width: 100%;
  box-shadow: 0 2.5rem 1rem #252525;
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

const Content = styled.div`
  display: flex;
  border-left: 0.1rem solid ${p => p.theme.darkLighten};
  border-right: 0.1rem solid ${p => p.theme.darkLighten};
  padding-top: 2rem;
`;

const AboutContainer = styled(Content)``;

const Main = styled.main`
  width: 100%;
  padding-right: ${p => (p.sidebar ? "2rem" : "auto")};
`;

const Sidebar = styled.div`
  width: 30%;
  padding-right: 1rem;

  & > * {
    margin-top: 2rem;
  }

  & > *:first-child {
    margin-top: 0;
  }
`;

const SidebarButtons = styled.div`
  & > * {
    margin-top: 0.5rem;
  }

  & > *:first-child {
    margin-top: 0;
  }
`;

const CommonTemplate = props => (
  <Body>
    <Container>
      <Header>
        <Logo />
        <SocialBar />
        <Authentication />
      </Header>
      <NavBar />

      <Content>
        <Main sidebar={props.sidebar}>
          <Alert rounded />
          <props.main />
        </Main>
        {props.sidebar && (
          <Sidebar>
            <SidebarButtons>
              <ButtonCw />
              <ButtonJoin />
            </SidebarButtons>

            <LatestCws />
            <PlayServers />
          </Sidebar>
        )}
      </Content>

      {props.about && (
        <AboutContainer>
          {" "}
          <About>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            aspernatur maxime a ipsam eaque error quis omnis nesciunt, unde
            voluptatum, soluta hic pariatur exercitationem vel sed qui dolores
            inventore velit!
          </About>
        </AboutContainer>
      )}
      <Footer />
    </Container>
  </Body>
);

CommonTemplate.propTypes = {
  main: PropTypes.func,
  sidebar: PropTypes.bool,
  about: PropTypes.bool
};

export { CommonTemplate };
