import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

class Nav extends Component {
  render() {
    const { Header } = Layout;
    return (
      <Header>
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
          <Menu.Item key="1">
            {" "}
            <Link to="/">Add a post</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/posts">All Posts</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default Nav;
