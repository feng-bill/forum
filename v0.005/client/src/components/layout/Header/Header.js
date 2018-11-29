import React, { Component } from "react";
import "./Header.css";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { clearCurrentProfile } from "../../../actions/profileActions";

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    //Auth Link
    const authLinks = (

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
              <div className=" navbar-item field has-addons">
                <div className="control">
                  <input className="input" type="text" placeholder="Search a question" />
                </div>
                <div className="control">
                  <a className="button is-info">
                    Search
                  </a>
                </div>
              </div>
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
  { logoutUser, clearCurrentProfile }
)(Header);
