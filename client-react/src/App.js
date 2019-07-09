import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Layout } from "antd";

import PostList from "./components/Post/PostList";
import PostAdd from "./components/Post/PostAdd";
import Nav from "./components/Navigation/Nav";

class App extends Component {
  render() {
    const { Content, Footer } = Layout;
    return (
      <Layout className="layout">
        <Router>
          <Nav />
          <Content style={{ padding: "0 50px" }}>
            <div
              className="content-body"
              style={{ background: "#fff", padding: 24, minHeight: 500 }}
            >
              <Switch>
                <Route exact path="/" component={PostAdd} />
                <Route path="/posts" component={PostList} />
              </Switch>
            </div>
          </Content>
        </Router>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
