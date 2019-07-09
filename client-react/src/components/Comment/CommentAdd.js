import React, { Component } from "react";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";
import routes from "../../constants/api";

const { TextArea } = Input;

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
    console.log(this.props);
    // if (!this.state.value) {
    //   return;
    // }

    this.setState({
      submitting: true
    });

    const data = [
      {
        author: "Han Solo",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: this.state.value,
        datetime: moment().fromNow()
      },
      ...this.state.comments
    ];
    const result = await routes.createAComment(this.props.paramsId, data);
    console.log(result);
    // setTimeout(() => {
    //   this.setState({
    //     submitting: false,
    //     value: "",
    //     comments: [
    //       {
    //         author: "Han Solo",
    //         avatar:
    //           "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    //         content: <p>{this.state.value}</p>,
    //         datetime: moment().fromNow()
    //       },
    //       ...this.state.comments
    //     ]
    //   });
    // }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
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

export default CommentAdd;
