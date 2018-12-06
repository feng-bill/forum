// Displaying each one item

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/postAction";
import "./CommentItem.css";

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <React.Fragment>
        <div className="box">
          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img src={comment.avatar} alt="" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{comment.text}</strong>
                  {/* Find user name by id */}
                  <small>@{comment.name}</small>
                </p>
                {comment.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                    type="button"
                    className="is-danger"
                  >
                    Delete <i className="fa fa-times" />
                  </button>
                ) : null}
              </div>
            </div>
          </article>
        </div>
      </React.Fragment>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
