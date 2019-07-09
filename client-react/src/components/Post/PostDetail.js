import React, { Component } from "react";
import { Row, Col } from "antd";
import routes from "../../constants/api";
import CommentAdd from "../Comment/CommentAdd";
import CommentList from "../Comment/CommentList";

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }
  async componentDidMount() {
    const response = await routes.getAPost(this.props.match.params.id);

    this.setState({
      post: response.data.data
    });

    console.log(this.state.post);
  }
  render() {
    const { title, content, picture } = this.state.post;
    return (
      <div>
        <Row>
          <Col>
            <h2>{picture}</h2>
            <img alt={title} src={picture} style={{ height: 400 }} />
            <h2>{title}</h2>

            <h4>{content}</h4>
          </Col>
          <CommentList />
          <CommentAdd />
        </Row>
      </div>
    );
  }
}

export default PostDetail;
