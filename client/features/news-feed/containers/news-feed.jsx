import React from "react";
import styled from "styled-components";
import { Article } from "../components/article";

const Body = styled.div`
  box-shadow: 0 3px 5px #2d2d2d;
`;

const content = `<h1>Hello world</h1><img src="http://thedesignspace.net/MT2archives/images/css/cssHeight3-thumb.jpg" />
oki bro i understand you <i>okay</i> <a href="/">this is link</a>

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, suscipit minus dolor omnis repudiandae autem? Beatae quidem veritatis vel repellendus sint! Ut sint vero debitis magni rerum quasi at non?
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
          <Article
            title="consectetur adipisicing elit. F"
            tags={["common"]}
            content={content}
          />
          <Article
            title="uga modi quas aspernatur libero dolor, perferendis"
            tags={["common"]}
            content={content}
          />
          <Article
            title="itaque similique voluptatibus"
            tags={["common", "clan wars"]}
            content={content}
          />
        </Body>
      </div>
    );
  }
}

export { NewsFeed };
