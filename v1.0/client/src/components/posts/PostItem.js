import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deletePost, addLike, unLike } from "../../actions/postAction";
import Moment from 'react-moment';

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
      <div style={{ paddingTop: 20 }}>
        <div className="box">
          <article className="media ">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={post.avatar} alt="" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <Link to={`/feed/${post._id}`} className="is-info">
                  <p>
                    <strong>{post.text} </strong>
                  </p>
                </Link>
                <small>@{post.name}</small>
                <br />
                <div>
                  Posted:
                    <Moment fromNow>
                    {post.date}
                  </Moment>
                </div>
                {showActions ? (
                  <div>
                    <div className="buttons">
                      {/* Like button */}
                      <button
                        onClick={this.onLikeClick.bind(this, post._id)}
                        type="button"
                        className="button is-light"
                      >
                        <i
                          className={classnames("icon fa fa-thumbs-up", {
                            "icon has-text-info": this.findUserLike(post.likes)
                          })}
                        />
                        {this.findUserLike(post.likes)}
                      </button>
                      {post.likes.length}

                      {/* Remove like */}
                      <button
                        onClick={this.onUnlikeClick.bind(this, post._id)}
                        type="button"
                        className="button is-light"
                      >
                        <i className="icon fa fa-thumbs-down" />
                      </button>
                    </div>
                    {/* Delete button  */}
                    <article className="media">
                      <div className="media-content">
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
                  </div>
                ) : null}
              </div>

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
