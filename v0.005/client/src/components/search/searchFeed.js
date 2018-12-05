//map through the search result from
//postContent = <SearchFeed posts={posts} />;
//display item

import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchItem from "./SearchItem";

class SearchFeed extends Component {
  render() {
    //destruct and take the post out of props
    const { posts } = this.props;

    return posts.map(post => <SearchItem key={post._id} post={post} />);
  }
}

SearchFeed.propTypes = {
  posts: PropTypes.array.isRequired
};
export default SearchFeed;
