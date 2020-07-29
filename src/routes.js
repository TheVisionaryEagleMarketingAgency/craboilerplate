import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import Layout from "./hoc/Layout/layout";

import NewsArticles from "../src/components/Articles/News/Posts/index";
import VideoArticles from "../src/components/Articles/Videos/index";

import NewsMain from "../src/components/Articles/News/Main/index";
import VideoMain from "../src/components/Articles/Videos/Main/index";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={NewsMain} />
          <Route path="/videos" exact component={VideoMain} />

          {/* 
          Route for internal routes.. Route which shows everything related to articles..
          Route that show the entire post when the link on the newlist page is clicked */}
          <Route path="/articles/:id" exact component={NewsArticles} />

          <Route path="/videos/:id" exact component={VideoArticles} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
