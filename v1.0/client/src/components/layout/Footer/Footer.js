import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer is-bottom">
        <div className="container has-text-centered">
          <span className="icon is-large">
            <a
              href="http://www.facebook.com"
              className="icon fa fa-facebook "
            />
          </span>
          <span className="icon is-large">
            <a
              href="http://www.instagram.com"
              className="icon fa fa-instagram "
            />
          </span>
          <span className="icon is-large">
            <a href="http://www.youtube.com" className="icon fa fa-youtube " />
          </span>

          <h1 style={{ color: "white" }}>
            © Quardrapod Team. All rights reserved. 2018
          </h1>
        </div>
      </footer>
    );
  }
}
