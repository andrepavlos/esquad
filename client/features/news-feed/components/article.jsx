import React from "react";
import styled from "styled-components";
import { Eye as _Eye } from "ui";

const Eye = styled(_Eye)`
  fill: ${p => p.theme.accent};
`;

function createMarkup(markup) {
  return { __html: markup };
}

const Header = styled.header`
  background-color: ${p => p.theme.darkLighten};
  padding: 2rem;
  position: relative;
  box-shadow: 0 0.6rem 0.3rem #323232;
`;

const Title = styled.div`
  font-size: 2.1rem;

  &:first-letter {
    text-transform: uppercase;
  }
`;

const Subtitle = styled.div`
  margin-top: 0.2rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${p => p.theme.text};
`;

const Time = styled.span`
  color: ${p => p.theme.accent};
  display: inline-block;
`;

const Author = styled.span`
  color: ${p => p.theme.accent};
  display: inline-block;
`;

const Tags = styled.div`
  margin-top: 1rem;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${p => p.theme.accent};
  border: 1px solid ${p => p.theme.accent};

  margin-left: 0.5rem;

  &:first-child {
    margin-left: 0;
  }
`;

const Content = styled.pre`
  padding: 4rem 2rem;
  margin: 0;
  white-space: pre-wrap;

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    font-weight: 400;
  }

  & * {
    padding: 0;
    margin: 0;
  }

  & a {
    color: ${p => p.theme.accent};
  }

  & img {
    height: 100%;
  }
`;

const Footer = styled.footer`
  padding: 0 2rem 2rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
`;

const Views = styled.span`
  display: inline-block;
  color: ${p => p.theme.accent};

  & > * {
    display: inline-block;
    vertical-align: middle;
    margin: 0 3px;
  }

  & > span {
    position: relative;
    top: 1px;
  }
`;

const Article = styled(props => (
  <article className={props.className}>
    <Header>
      <Title>{props.title}</Title>
      <Subtitle>
        <Time>24.04.19 23:45</Time> by <Author>Andrepavlos</Author>
      </Subtitle>

      <Tags>
        {props.tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </Tags>
    </Header>
    <Content dangerouslySetInnerHTML={createMarkup(props.content)} />
    <Footer>
      <Views>
        <Eye width="18" />
        <span>200</span>
      </Views>
    </Footer>
  </article>
))`
  width: 100%;
  margin-top: 2rem;
  background-color: ${p => p.theme.dark};

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export { Article };
