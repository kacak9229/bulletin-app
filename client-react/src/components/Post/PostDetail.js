import React, { Component } from "react";
import { Row, Col, Typography } from "antd";
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
    const { Title, Paragraph } = Typography;
    const { title, content, picture } = this.state.post;
    return (
      <Row>
        <Col>
          <Typography>
            <Title>
              {title}{" "}
              <span>
                <img src={picture} style={{ width: 50, height: 50 }} />
              </span>
            </Title>
            <Paragraph />
            <Paragraph>{content}</Paragraph>
          </Typography>
        </Col>
        <CommentList paramsId={this.props.match.params.id} />
        <CommentAdd paramsId={this.props.match.params.id} />
      </Row>
    );
  }
}

export default PostDetail;
