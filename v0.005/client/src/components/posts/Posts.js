//This file is Similar to Parent wrapper

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostFeed from "./PostFeed";
import PostForm from "./PostForm";
import Spinner from "../common/Spinner";
import { getPosts } from "../../actions/postAction";
import "../layout/TabCSS/Tab.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Posts.css";
class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    //take out post from the state
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
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
          <div className="columns">
            <div className="column is-two-thirds">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <p>
                      <a href="/">Home</a> >{" "}
                      <a href="javascript:window.location.href=window.location.href">
                        Feed
                      </a>
                    </p>
                  </div>
                  <div className="level-item">
                    <div className="field has-addons">
                      <p className="control is-expanded">
                        <input
                          className="input"
                          type="text"
                          placeholder="Find a post"
                        />
                      </p>
                      <p className="control">
                        <button className="button">Search</button>
                      </p>
                    </div>
                  </div>
                </div>
              </nav>
              <Tabs>
                <TabList>
                  <Tab>Popular</Tab>
                  <Tab>New</Tab>
                </TabList>
                <TabPanel>{postContent}</TabPanel>
                <TabPanel>{postContent}</TabPanel>
                <PostForm />
              </Tabs>
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

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

//Hook up reduce with main post component
export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
