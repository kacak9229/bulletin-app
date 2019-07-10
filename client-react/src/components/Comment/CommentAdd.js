import React, { Component } from "react";
import { connect } from "react-redux";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";
import routes from "../../constants/api";
import { addComment } from "../../actions/index";

const { TextArea } = Input;

function mapDispatchToProps(dispatch) {
  return {
    addComment: comment => dispatch(addComment(comment))
  };
}

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class CommentAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      submitting: false,
      value: ""
    };
  }

  handleSubmit = async () => {
    this.setState({
      submitting: true
    });

    const data = [
      {
        author: "Han Solo",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        text: this.state.value,
        datetime: moment().fromNow()
      }
    ];
    const result = await routes.createAComment(this.props.paramsId, data);
    setTimeout(() => {
      this.props.addComment(data);
      this.setState({
        submitting: false,
        value: ""
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { submitting, value } = this.state;

    return (
      <div>
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CommentAdd);
