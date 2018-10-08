import React, { Component } from 'react';
import './Faq.css'
//import axios from 'axios';

class Faq extends Component {
    render() {
        return (
            <div>
                <nav className="navbar is-white">
                    <div className="container">
                        <div className="navbar-menu">
                            <div className="navbar-start">
                                <a className="navbar-item is-active" href="http://www.google.com">Popular</a>
                                <a className="navbar-item" href="http://www.google.com">Recent</a>
                                <a className="navbar-item" href="http://www.google.com">Rising</a>
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <input className="input" type="search" placeholder="Search forum..."></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <section classNameName="container">
                    <div classNameName="columns">
                        <div classNameName="column is-9">
                            <div classNameName="box content">
                                <article classNameName="post">
                                    <h4>Bill: I write stuff</h4>
                                    <div classNameName="media">
                                        <div classNameName="media-left">
                                            <p><i classNameName="fa fa-twitter"></i></p>
                                        </div>
                                        <div classNameName="media-content">
                                            <div classNameName="content">
                                                <p>
                                                    <a href="http://www.google.com">@jsmith</a> replied 34 minutes ago &nbsp;
                                                    <span className="tag">Question</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div classNameName="media-right">
                                            <span classNameName="has-text-gray">
                                                <i className="fa fa-comments"></i>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div classNameName="column is-3">
                            <a className="button is-primary is-block is-alt is-large" href="http://www.google.com">New Post</a>
                        </div>
                    </div>
                </section>

            </div>
        )
    };
}

export default Faq;
