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
import { Link } from "react-router-dom"

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
                      <a alt="" href="/">Home</a>
                      <a alt="" href="javascript:window.location.href=window.location.href">Feed</a>
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
              <div style={{ marginTop: 100 }} className="content">
                <aside class="menu">
                  <p class="menu-label is-size-3">Trending</p>
                  <ul class="menu-list">
                    <li>
                      <Link to="/feed/5c0873f370cdf60d23eee563" className="is-info">
                        <p>
                          <strong>Where is the school Starbucks located?</strong>
                        </p>
                      </Link>
                    </li>
                    <hr />
                    <li><Link to="/feed/5c0873f370cdf60d23eee563" className="is-info">
                      <p>
                        <strong>Where is the school Starbucks located?</strong>
                      </p>
                    </Link></li>
                    <hr />
                    <li><Link to="/feed/5c0873f370cdf60d23eee563" className="is-info">
                      <p>
                        <strong>Where is the school Starbucks located?</strong>
                      </p>
                    </Link></li>
                    <hr />
                  </ul>
                </aside>
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
