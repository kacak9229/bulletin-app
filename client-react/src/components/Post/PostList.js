import React, { Component } from "react";
import { Layout, Card, Row, Col } from "antd";
import routes from "../../constants/api";

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
      <Col
        key={post.id}
        xs={{ span: 5, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
      >
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt={post.title} src={post.picture} />}
        >
          <Meta title={post.title} description={post.content} />
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
        <Row>{this.state.posts}</Row>
      </div>
    );
  }
}

export default PostList;
