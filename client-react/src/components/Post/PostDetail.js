import React, { Component } from "react";
import { Row, Col, Descriptions } from "antd";
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
            <Descriptions title={title}>
              <Descriptions.Item>
                <img
                  alt={title}
                  src={picture}
                  style={{ width: 300, height: 300 }}
                />
              </Descriptions.Item>

              <Descriptions.Item label="Detail">{content}</Descriptions.Item>
            </Descriptions>
            ,
          </Col>
          <CommentList paramsId={this.props.match.params.id} />
          <CommentAdd paramsId={this.props.match.params.id} />
        </Row>
      </div>
    );
  }
}

export default PostDetail;
