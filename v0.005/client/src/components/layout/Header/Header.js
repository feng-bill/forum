import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="navbar is-fixed-top">
        <div className="container">
          <span className="navbar-burger">
            <span />
            <span />
            <span />
          </span>
          <div className="navbar-menu">
            <div className="navbar-start ">
              <div className="navbar-item is-active">
                <div>
                  <Link className="title" to="#">
                    Join Us
                  </Link>
                </div>
              </div>
              <div className="navbar-item">
                <div>
                  <Link className="title" to="/team">
                    Team
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/">
            <img
              className="has-text-align logo"
              alt=""
              src="https://cdn3.iconfinder.com/data/icons/submarine/512/kid-child-submarine-toy-512.png"
            />
          </Link>

          <div className={"navbar-menu"}>
            <div className="navbar-end">
              <div className="navbar-item">
                <div>
                  <Link className="title" to="/sponsor">
                    Sponsor
                  </Link>
                </div>
              </div>
              <div className="navbar-item">
                <div>
                  <Link className="title" to="#">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
