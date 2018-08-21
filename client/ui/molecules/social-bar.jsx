import React from "react";
import styled from "styled-components";
import { Link } from "../atoms";
import { Discord, Youtube, Twitter } from "../outlines";

export const SocialBar = styled(props => (
  <div className={props.className}>
    <Link external to="/">
      <Discord />
    </Link>

    <Link external to="/">
      <Youtube />
    </Link>

    <Link external to="/">
      <Twitter />
    </Link>
  </div>
))`
  & > * {
    margin: 0 0.5rem;
  }
  & img {
    height: 4rem;
  }
`;
