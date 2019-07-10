import React, { Component } from "react";
import { List, Row, Col, Icon, Avatar } from "antd";
import routes from "../../constants/api";
import { Link } from "react-router-dom";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const response = await routes.getAllPost();

    this.setState({
      posts: response.data
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <h1 align="center">List of the Posts</h1>
          </Col>
        </Row>
        <Row>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3
            }}
            dataSource={this.state.posts}
            footer={
              <div>
                <b>Socar x Bulletin Board</b>
              </div>
            }
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText type="star-o" text="156" />,
                  <IconText type="like-o" text="156" />,
                  <IconText type="message" text="2" />
                ]}
                extra={<img width={100} alt="logo" src={item.picture} />}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<Link to={`/posts/${item.id}`}>{item.title}</Link>}
                  description={item.picture}
                />
                {item.content}
              </List.Item>
            )}
          />
        </Row>
      </div>
    );
  }
}

export default PostList;
