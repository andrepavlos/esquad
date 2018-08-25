import React from "react";
import styled, { css } from "styled-components";

const styles = css`
  padding: 2rem;
  background-color: ${p => p.theme.dark};
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  align-items: center;
`;

const Copyright = styled.div``;
const Engine = styled.a`
  color: ${p => p.theme.accent};
`;

const Footer = styled(p => (
  <footer className={p.className}>
    <Copyright>2018 (c) eSquad CMS. All rights reserved </Copyright>
    <Engine href="https://github.com/andrepavlos/esquad">eSquad CMS</Engine>
  </footer>
))`
  ${styles};
`;

export { Footer };
