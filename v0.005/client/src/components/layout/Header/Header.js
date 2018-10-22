import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
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
      <div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div>
              <a href="www.google.com" onClick={this.onLogoutClick.bind(this)}>
                <img
                  src={user.avatar}
                  alt={user.name}
                  style={{ width: "25px", marginRight: "5px" }}
                  title="you have an image"
                />
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    );

    //Guest Link
    const guestLinks = (
      <div>
        <div className="navbar-item">
          <div>
            <Link className="title" to="/register">
              Register
            </Link>
          </div>
        </div>
        <div className="navbar-item">
          <div>
            <Link className="title" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    );

    return (
      <div className="navbar has-shadow">
        <div className="container">
          <div className="navbar-start">
            <div className="navbar-brand">
              <a href="/">
                <img
                  className="has-text-align logo"
                  alt=""
                  src={require("../../../assets/quadrapod.PNG")}
                />
              </a>
            </div>
          </div>
          <div>{isAuthenticated ? authLinks : guestLinks}</div>
        </div>
      </div>
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
