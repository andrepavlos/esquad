import styled from "styled-components";
import { Button as _Button } from "./button";

const Shell = styled.form`
  background-color: ${p => p.theme.dark};
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.1);
  width: 30rem;
  overflow: hidden;
`;

const Header = styled.div`
  padding: 2rem;
  background-color: ${p => p.theme.darkLighten};
  box-shadow: 0 0.2rem 0.5rem #323232;
`;

const Body = styled.div`
  padding: 4rem 3rem;
  border: 1px solid ${p => p.theme.darkLighten};
`;

const Title = styled.div`
  font-size: 2rem;
  text-transform: capitalize;
  color: ${p => p.theme.accent};
`;

const Input = styled.input`
  padding: 0.6rem 1rem;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.darkDarken};
  border: 0.1rem solid ${p => p.theme.darkLighten};
  box-shadow: none;
  width: 100%;

  &::placeholder {
    text-transform: capitalize;
    font-size: 1.1rem;
  }
`;

const LabelBlock = styled.label`
  display: block;
  margin-bottom: 1.5rem;

  &:last-of-type {
    margin-bottom: 4rem;
  }
`;

const Label = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const ButtonBlock = styled.div`
  margin-top: 1.5rem;
  text-align: center;

  & > * {
    margin-left: 1rem;
  }

  & > *:first-child {
    margin-left: 0;
  }
`;

const Button = styled(_Button)`
  border-radius: 0.5rem;
  width: calc(50% - 0.5rem);

  &:hover {
    box-shadow: none;
  }
`;

const Notice = styled.div`
  text-align: center;
  font-size: 1.3rem;

  & > span {
    color: ${p => p.theme.accent};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Form = {
  Shell,
  Header,
  Body,
  Title,
  Input,
  LabelBlock,
  Label,
  ButtonBlock,
  Button,
  Notice
};
