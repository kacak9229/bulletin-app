import React, { Component } from "react";
import { connect } from "react-redux";
import { Comment, Tooltip, List } from "antd";
import moment from "moment";
import { fetchComments } from "../../actions/index";

const mapStateToProps = state => {
  return { comments: state.comments };
};

class CommentList extends Component {
  async componentDidMount() {
    await this.props.dispatch(fetchComments(this.props.paramsId));
  }

  render() {
    return (
      <List
        className="comment-list"
        header={`${this.props.comments.length} replies`}
        itemLayout="horizontal"
        dataSource={this.props.comments}
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

export default connect(mapStateToProps)(CommentList);
