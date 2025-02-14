import React, { Component } from "react";
import { Form, Row, Col, Input, Upload, Icon, Button, message } from "antd";
import routes from "../../constants/api";

class PostAdd extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: null,
      content: null,
      picture: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = info => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      console.log("This is the file name", info.file.response);
      this.setState({
        picture: info.file.response.location
      });
      return;
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      content: this.state.content,
      picture: this.state.picture
    };

    const result = await routes.createAPost(data);
    console.log(result);
    if (result.status === 200) {
      message.success("Successfully added a new post");
      this.props.history.push("/posts");
    } else {
      message.error("Title, Content and picture cannot be empty");
    }
  }
  render() {
    const props = {
      name: "picture",
      action: `${routes.API_ROOT}/upload`,
      headers: {
        authorization: "authorization-text"
      }
    };
    const { TextArea } = Input;
    // if (redirect) {
    //   return <Redirect to="/posts" />;
    // }

    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <h1>Post something</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                <Input
                  placeholder="Title"
                  name="title"
                  defaultValue={this.state.title}
                  onChange={this.handleInputChange}
                />
              </Form.Item>
              <Form.Item>
                <TextArea
                  placeholder="Content ..."
                  name="content"
                  defaultValue={this.state.content}
                  onChange={this.handleInputChange}
                  rows={10}
                />
              </Form.Item>
              <Form.Item>
                <Upload {...props} onChange={this.onChange}>
                  <Button>
                    <Icon type="upload" /> Click to Upload
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit your post
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PostAdd;
