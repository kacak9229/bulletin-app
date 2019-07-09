import React, { Component } from "react";
import { Comment, Tooltip, List } from "antd";
import moment from "moment";
import routes from "../../constants/api";

const data = [
  {
    actions: [<span>Reply to</span>],
    author: "Han Solo",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, "days")
          .format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>
          {moment()
            .subtract(1, "days")
            .fromNow()}
        </span>
      </Tooltip>
    )
  },
  {
    actions: [<span>Reply to</span>],
    author: "Han Solo",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, "days")
          .format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>
          {moment()
            .subtract(2, "days")
            .fromNow()}
        </span>
      </Tooltip>
    )
  }
];

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    const response = await routes.getComments(this.props.paramsId);
    console.log("This is comments", response.data.data);
    this.setState({
      data: response.data.data
    });
  }

  render() {
    return (
      <List
        className="comment-list"
        header={`${this.state.data.length} replies`}
        itemLayout="horizontal"
        dataSource={this.state.data}
        renderItem={item => (
          <li>
            <Comment
              actions={[<span>Reply to</span>]}
              author={"Dragon King"}
              avatar={
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              }
              content={item.text}
              datetime={
                <Tooltip
                  title={moment()
                    .subtract(2, "days")
                    .format("YYYY-MM-DD HH:mm:ss")}
                >
                  <span>
                    {moment()
                      .subtract(2, "days")
                      .fromNow()}
                  </span>
                </Tooltip>
              }
            />
          </li>
        )}
      />
    );
  }
}

export default CommentList;
