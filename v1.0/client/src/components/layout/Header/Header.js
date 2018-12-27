import React, { Component } from "react";
import "./Header.css";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { clearCurrentProfile } from "../../../actions/profileActions";
import { keywordSearch } from "../../../actions/searchAction"
import { Link } from 'react-router-dom'

class Header extends Component {

  constructor() {
    super();
    this.state = {
      search: ""
    };

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // onSubmit(e) {
  //   e.preventDefault();

  //   const search = {
  //     search: this.state.search
  //   };
  //   console.log("Hit Submit")
  //   this.props.keywordSearch();
  // }


  render() {
    const { isAuthenticated, user } = this.props.auth;

    //Auth Link
    const authLinks = (
      <div className="navbar-item">
        <a href="/dashboard" className="r-item navbar-item is-capitalized" >
          {user.name}
        </a>
        <a
          alt=""
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
              <a alt="" href="/" className="navbar-item has-img" />
            </div>
            <div className="navbar-end">
              <a href="/" className="navbar-item">Home</a>
              <a href="/feed" className="navbar-item">Academic</a>
              <a href="/about" className="navbar-item">About</a>

              <div className="navbar-item">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Search a post"
                      name="search"
                      value={this.state.search}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="control">
                    <a className="button is-info" href={`/filter/${this.state.search}`}>
                      Search
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="navbar-item">
              {isAuthenticated ? authLinks : guestLinks}
            </div>

          </div>
        </nav >

      </React.Fragment >
    );
  }
}

Header.propTypes = {
  logoutUser: propTypes.func.isRequired,
  keywordSearch: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile, keywordSearch }
)(Header);