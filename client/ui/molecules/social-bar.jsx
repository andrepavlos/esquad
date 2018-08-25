import React from "react";
import styled from "styled-components";
import { Link } from "../atoms";
import { Discord, Youtube, Twitter } from "../outlines";

export const SocialBar = styled(props => (
  <div className={props.className}>
    <Link external to="/">
      <Discord width="40" />
    </Link>

    <Link external to="/">
      <Youtube width="40" />
    </Link>

    <Link external to="/">
      <Twitter width="40" />
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
