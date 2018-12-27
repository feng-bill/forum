import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchFeed from "./SearchFeed";
import SearchItem from './SearchItem'
import Spinner from "../common/Spinner";
import { keywordSearch } from "../../actions/searchAction";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class SearchPosts extends Component {
    componentDidMount() {

        //~~~~~ PARAMS SEARCH~~~~~~//
        // console.log(this.props.location.search)
        // this.props.keywordSearch(this.props.location.search); //"?search=xyz"
        // const params = new URLSearchParams(this.props.location.search)
        // console.log(params.get('search'))

        // this.props.keywordSearch(params.get('search'))

        this.props.keywordSearch(this.props.match.params.search)

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
