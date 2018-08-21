import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(props => {
  let originalProps = Object.assign({}, props);
  delete originalProps.external;
  delete originalProps.to;

  if (props.external) {
    return (
      <a {...originalProps} href={props.to}>
        {props.children}
      </a>
    );
  }

  return <NavLink {...props}>{props.children}</NavLink>;
})``;
