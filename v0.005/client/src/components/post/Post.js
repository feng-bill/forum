import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";
import Spinner from "../common/Spinner";
import { getPost } from "../../actions/postAction";
import { Link } from "react-router-dom";
import "./Post.css";
class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }
  constructor() {
    super();
    this.state = {
      selected: 0
    };
  }
  render() {
    const { post, loading } = this.props.post;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <React.Fragment>
          <PostItem post={post} showActions={false} />

          <div className="invisibleBox"><hr />
            <CommentFeed postId={post._id} comments={post.comments} />
          </div>
          <hr />
          <CommentForm postId={post._id} />

        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <section className="hero is-medium has-bg-img">
          <div className="hero-body">
            <div className="container">
              <div className="box">
                <h1 className="title">Spartan Forum</h1>
              </div>
            </div>
          </div>
        </section>
        <div className="body2">
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <p>
                  <a alt="" href="/">Home</a> > <a href="./">Feed</a> >
                  <a alt="" href="javascript:window.location.href=window.location.href">
                    Post
                  </a>
                </p>
              </div>
            </div>
          </nav>
          <button type="button" className="button">
            <Link to="/feed">Back To Feed</Link>
          </button>
          <div className="columns">
            <div className="column is-two-thirds">
              <div className="box">{postContent}</div>
            </div>
            <div className="column is-one-third">
              <div className="content">
                <p className="subTitle">
                  <b>Trending</b>
                </p>
                <hr />

                <ul>
                  <li>
                    <a href="/" target="_blank">
                      A Specific Post
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a href="/" target="_blank">
                      A Specific Post
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a href="/" target="_blank">
                      A Specific Post
                    </a>
                  </li>
                  <hr />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
