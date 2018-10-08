import React, { Component } from "react";
import "./Footer.css";
//import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer is-primary">
        <div className="container">
          <div>
            <div className="has-text-centered">
              <h1>
                © SJSU 2018. EMAIL US @<a href="http://www.google.com">HERE</a>.
                <a className="icon" href="http://www.facebook.com">
                  <i className="fa fa-facebook" />
                </a>
                <a className="icon" href="http://www.twitter.com">
                  <i className="fa fa-whatsapp" />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
