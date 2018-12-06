//This file is Similar to Parent wrapper

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchFeed from "./SearchFeed";
import SearchItem from './SearchItem'
import Spinner from "../common/Spinner";

import { keywordSearch } from "../../actions/searchAction";
// import "../layout/TabCSS/Tab.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "./Posts.css";

class SearchPosts extends Component {
    componentDidMount() {
        this.props.keywordSearch(this.props.match.params.data);
    }

    render() {
        //take out post from the state
        const { posts, loading } = this.props.posts;
        let postContent;

        if (posts === null || loading) {
            postContent = <Spinner />;
        } else {
            postContent = <SearchFeed posts={posts} />;
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
                            <div>
                                {postContent}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

SearchPosts.propTypes = {
    keywordSearch: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    //property within component: state.xxx comes from reducers/index.js
    posts: state.search
});


//Hook up reduce with main post component
export default connect(
    mapStateToProps,
    { keywordSearch }
)(SearchPosts);
