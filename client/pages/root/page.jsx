import React from "react";
import { CommonTemplate } from "ui";
import { NewsFeed } from "features/news-feed";

const Page = () => <CommonTemplate main={NewsFeed} sidebar={true} />;

export default Page;
