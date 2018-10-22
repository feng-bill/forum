import React, { Component } from "react";
import "./School.css";
//import axios from "axios";
//import TabApp from '/forum/compare-react/src/components/Tab/TabApp';
const $ = window.$;
class School extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0
    };
  }
  componentDidmount() {
    $("#test").click(function() {
      $("#guide-tabs li:eq(1) a").tab("show");
    });
    //constructor(props) {
    //  super(props);
    //this.state = { isToggleOn: false };
    //this.aClick = this.aClick.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const content = {
      aTab: "Popular",
      bTab: "New"
    };
    return (
      <div>
        <section className="hero is-medium has-bg-img">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Title 1</h1>
              <h2 className="subtitle">Subtitle 3</h2>
            </div>
          </div>
        </section>

        <div className="body">
          <div className="columns">
            <div className="column is-two-thirds">
              <div />

              <div className="tabs">
                <ul id="guide-tabs">
                  <li className="is-active">
                    <a href="/" data-toggle="tab">
                      Popular
                    </a>
                  </li>
                  <li>
                    <a href="/" data-toggle="tab">
                      New
                    </a>
                  </li>
                </ul>
              </div>

              <div class="tab-content">
                <div className="tab-pane is-active" id="Popular">
                  <div className="box">
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img
                            src="https://bulma.io/images/placeholders/128x128.png"
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>Example Posting</strong>{" "}
                            <small>@johnsmith</small> <small>31m</small>
                          </p>
                        </div>
                        <nav className="level is-mobile">
                          <div className="level-left">
                            <a
                              className="level-item"
                              aria-label="reply"
                              href="/"
                            >
                              <span className="icon is-small">
                                <i
                                  className="fas fa-reply"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a
                              className="level-item"
                              aria-label="retweet"
                              href="/"
                            >
                              <span className="icon is-small">
                                <i
                                  className="fas fa-retweet"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a
                              className="level-item"
                              aria-label="like"
                              href="/"
                            >
                              <span className="icon is-small">
                                <i
                                  className="fas fa-heart"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                          </div>
                        </nav>
                      </div>
                    </article>
                  </div>
                </div>

                <div className="tab-pane" id="New">
                  <div className="box">
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img
                            src="https://bulma.io/images/placeholders/128x128.png"
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>Example Posting</strong>{" "}
                            <small>@johnsmith</small> <small>31m</small>
                          </p>
                        </div>
                        <nav className="level is-mobile">
                          <div className="level-left">
                            <a
                              className="level-item"
                              aria-label="reply"
                              href="/"
                            >
                              <span className="icon is-small">
                                <i
                                  className="fas fa-reply"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a
                              className="level-item"
                              aria-label="retweet"
                              href="/"
                            >
                              <span className="icon is-small">
                                <i
                                  className="fas fa-retweet"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a
                              className="level-item"
                              aria-label="like"
                              href="/"
                            >
                              <span className="icon is-small">
                                <i
                                  className="fas fa-heart"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                          </div>
                        </nav>
                      </div>
                    </article>
                  </div>
                </div>
                <hr />
                <div className="posting">
                  <textarea
                    className="textarea"
                    placeholder="Create your own post..."
                  />
                  <div className="field is-grouped is-pulled-right">
                    <a className="button is-primary" href="/">
                      <span>Submit</span>
                    </a>
                    <a className="button" href="/">
                      Clear
                    </a>
                  </div>
                </div>
                <nav
                  className="pagination"
                  role="navigation"
                  aria-label="pagination"
                >
                  <a
                    className="pagination-previous"
                    title="This is the first page"
                    disabled
                    href="/"
                  >
                    Previous
                  </a>
                  <a className="pagination-next" href="/">
                    Next page
                  </a>
                  <ul className="pagination-list">
                    <li>
                      <a
                        className="pagination-link is-current"
                        aria-label="Page 1"
                        aria-current="page"
                        href="/"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        className="pagination-link"
                        aria-label="Goto page 2"
                        href="/"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        className="pagination-link"
                        aria-label="Goto page 3"
                        href="/"
                      >
                        3
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="content">
              <p className="subTitle">
                <b>Trending</b>
              </p>
              <hr />
              <ul>
                <li>
                  <a href="/" target="_blank">
                    A Specific Post
                  </a>
                </li>
                <hr />
                <li>
                  <a href="/" target="_blank">
                    A Specific Post
                  </a>
                </li>
                <hr />
                <li>
                  <a href="/" target="_blank">
                    A Specific Post
                  </a>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default School;
