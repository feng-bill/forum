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
      <div className="navbar-end">
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
      <div className="navbar-end">
        <a className="r-item navbar-item" href="/register">
          Register
        </a>
        <a className="r-item navbar-item" href="/login">
          Log In
        </a>
      </div>
    );
    return (
      //using React.Fragment instead of div to prevent layering
      <React.Fragment>
        <div style={divStyle}>
          <div className="navbar has-shadow">
            <div className="container">
              <div className="navbar-brand">
                <a href="/" className="navbar-item has-img" />
              </div>
              {isAuthenticated ? authLinks : guestLinks}
          </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

var divStyle ={
  margin: 0,
  padding: 0
}

var divStyle = {
  margin: 0,
  padding: 0
};

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
