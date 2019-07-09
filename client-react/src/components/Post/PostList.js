import React, { Component } from "react";
import { Card, Row, Col, Icon, Avatar, Button } from "antd";
import routes from "../../constants/api";
import { Link } from "react-router-dom";

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const response = await routes.getAllPost();
    console.log("This is a response", response);
    this.setState({
      posts: response.data
    });
  }

  render() {
    const { Meta } = Card;

    this.state.posts = this.state.posts.map(post => (
      <Col key={post.id} xs={{ span: 5 }} lg={{ span: 6 }}>
        <Card
          style={{ width: 240, marginTop: 20 }}
          cover={
            <img alt={post.title} src={post.picture} style={{ height: 200 }} />
          }
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={post.title}
            description={post.content}
          />
          <Button style={{ marginTop: 30 }} type="success">
            <Link to={`/posts/${post.id}`} params={{ post_id: post.id }}>
              Details
            </Link>
          </Button>
        </Card>
      </Col>
    ));

    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <h1>List of the Posts</h1>
          </Col>
        </Row>
        <Row gutter={16}>{this.state.posts}</Row>
      </div>
    );
  }
}

export default PostList;
