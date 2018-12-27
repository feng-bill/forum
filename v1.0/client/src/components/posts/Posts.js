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
    //do all API call
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
                      <a alt="" href="/">Home</a> >
                      <a alt="" href="javascript:window.location.href=window.location.href">Feed</a>
                    </p>
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
                  <p class="menu-label is-size-3">Recommend</p>
                  <ul class="menu-list">
                    <li>
                      <Link to="/feed/5c1fe4ddadad69001614025a" className="is-info">
                        <p>
                          <strong>Is this website better than the Samy App?</strong>
                        </p>
                      </Link>
                    </li>
                    <hr />
                    <li><Link to="/feed/5c0ded35f87f3b1b3096595e" className="is-info">
                      <p>
                        <strong>Who to take for CS 146?</strong>
                      </p>
                    </Link></li>
                    <hr />
                    <li><Link to="/feed/5c0ded3ef87f3b1b3096595f" className="is-info">
                      <p>
                        <strong>Who is the best MIS teacher?</strong>
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
