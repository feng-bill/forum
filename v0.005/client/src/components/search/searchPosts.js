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
            <div>
                <div style={{ marginTop: 100, paddingTop: 100 }}>
                    <p> Hi this is your search s </p>
                </div>
                {/* {JSON.stringify(this.props.search.post[0])} */}
                {postContent}
            </div>

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
