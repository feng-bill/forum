import React, { Component } from "react";
import "./Header.css";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { clearCurrentProfile } from "../../../actions/profileActions";
import { searchPost } from "../../../actions/search"

class Header extends Component {

  constructor() {
    super();
    this.state = {
      search: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSearch(e) {
    e.preventDefault();

    const search = {
      search: this.state.search
    };

    this.props.searchPost(search);
  }



  render() {
    const { isAuthenticated, user } = this.props.auth;

    //Auth Link
    const authLinks = (
      <div className="navbar-item">
        <a href="/dashboard" className="r-item navbar-item is-capitalized" >
          {user.name}
        </a>
        <a
          className="r-item navbar-item"
          onClick={this.onLogoutClick.bind(this)}
        >
          <img
            src={user.avatar}
            alt={user.name}
            style={{ width: "25px", marginRight: "5px" }}
            title="you have an image"
          />
          Logout
        </a>
      </div>
    );

    //Guest Link
    const guestLinks = (
      <div className="buttons">
        <a className="button is-dark" href="/login">Sign In</a>
        <a className="button is-light " href="/register">Sign Up</a>
      </div>
    );
    return (
      //using React.Fragment instead of div to prevent layering
      <React.Fragment>
        <nav className="navbar is-primary">
          <div className="container">
            <div className="navbar-brand">
              <a href="/" className="navbar-item has-img" />
            </div>
            <div className="navbar-end">
              <a href="/" className="navbar-item">Home</a>
              <a href="/feed" className="navbar-item">Academic</a>
              <a href="/about" className="navbar-item">About</a>
              <form onSearch={this.onSearch}>
                <div className="navbar-item field add-on">
                  <div className="control">
                    <input className="input"
                      type="text"
                      placeholder="Search..."
                      name="search"
                      value={this.state.search}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="control">
                    <button type="submit" className="button is-info">Search</button>
                  </div>

                </div>
              </form >
              <div className="navbar-item">
                {isAuthenticated ? authLinks : guestLinks}
              </div>
            </div>
          </div>
        </nav>

      </React.Fragment>
    );
  }
}

Header.propTypes = {
  logoutUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile, searchPost }
)(Header);
