import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deletePost, addLike, unLike } from "../../actions/postAction";

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }
  onUnlikeClick(id) {
    this.props.unLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    //if use had liked
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else return false;
  }

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <div style={{ paddingTop: 100 }} className="column is-two-thirds">
        <div className="box">
          <article className="media media-left">
            <figure className="image is-64x64">
              <img src={post.avatar} alt="" />
            </figure>
            <div className="media-content">
              <p>
                <strong>{post.text}</strong>
                <small>@{post.name}</small>
                <br />
              </p>
              {showActions ? (
                <span>
                  {/* Like button */}
                  <button
                    onClick={this.onLikeClick.bind(this, post._id)}
                    type="button"
                    className="button is-light"
                  >
                    <i
                      className={classnames("icon fa fa-thumbs-up", {
                        "button is-info": this.findUserLike(post.likes)
                      })}
                    />
                    {post.likes.length}
                  </button>
                  {/* Remove like */}
                  <button
                    onClick={this.onUnlikeClick.bind(this, post._id)}
                    type="button"
                    className="button is-light"
                  >
                    <i className="icon fa fa-thumbs-down" />
                  </button>

                  <article className="media">
                    <div className="media-content">
                      <Link to={`/post/${post._id}`} className="is-info">
                        Comments
                      </Link>
                      {post.user === auth.user.id ? (
                        <button
                          onClick={this.onDeleteClick.bind(this, post._id)}
                          type="button"
                          className="is-danger"
                        >
                          Delete <i className="fa fa-times" />
                        </button>
                      ) : null}
                    </div>
                  </article>
                </span>
              ) : null}
            </div>
          </article>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  unLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { deletePost, addLike, unLike }
)(PostItem);
