import React from "react";
import styled from "styled-components";
import ReactDOMServer from "react-dom/server";
import { Logo as _Logo } from "@/ui";
import { Article } from "../components/article";

const Body = styled.div`
  box-shadow: 0 3px 5px #2d2d2d;
`;

const Logo = styled(_Logo)`
  display: block;
  margin: 0 auto;
`;

const content = `${ReactDOMServer.renderToStaticMarkup(<Logo />)}
Hi there, <i>stranger</i>. This is a <a href="https://en.wikipedia.org/wiki/Content_management_system">Content Management System</a>, specially created for small cybersport teams that do not want to spend their time for configuring web stuff.

It's under heavy development and not stable.
`.trim();

class NewsFeed extends React.Component {
  render() {
    return (
      <div>
        <Body>
          <Article
            title="Lorem ipsum dolor sit amet"
            tags={["common"]}
            content={content}
          />
        </Body>
      </div>
    );
  }
}

export { NewsFeed };
