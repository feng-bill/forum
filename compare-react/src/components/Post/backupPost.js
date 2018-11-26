import React, { Component } from "react";
import "./Post.css";

import { Link } from "react-router-dom";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0
    };
  }
  render() {
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
              <div className="box">
                <div className="box">
                  <div className="box1">
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img
                            src="https://bulma.io/images/placeholders/128x128.png"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>What class do you recommend?</strong>{" "}
                            <small>@johnsmith</small> <small>1d</small><br/>
                            I am currently minoring in CS. What electives do you recommend?
                          </p>
                        </div>
                        <nav className="level is-mobile">
                          <div className="level-left">
                            <a className="level-item" aria-label="reply">
                              <span className="icon is-small">
                                <i
                                  className="fas fa-reply"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a className="level-item" aria-label="retweet">
                              <span className="icon is-small">
                                <i
                                  className="fas fa-retweet"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a className="level-item" aria-label="like">
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
                <div className="box">
                  <div className="box2">

                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img
                            src="https://bulma.io/images/placeholders/128x128.png"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <small>@janesmith</small> <small>1d</small><br/>
                            CS 146 is the most important class. You should take it!
                          </p>
                        </div>
                        <nav className="level is-mobile">
                          <div className="level-left">
                            <a className="level-item" aria-label="reply">
                              <span className="icon is-small">
                                <i
                                  className="fas fa-reply"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a className="level-item" aria-label="retweet">
                              <span className="icon is-small">
                                <i
                                  className="fas fa-retweet"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a className="level-item" aria-label="like">
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

                <div className="box">
                  <div className="box2">

                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img
                            src="https://bulma.io/images/placeholders/128x128.png"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <small>@joemith</small> <small>1d</small><br/>
                            I agree with @janesmith.
                          </p>
                        </div>
                        <nav className="level is-mobile">
                          <div className="level-left">
                            <a className="level-item" aria-label="reply">
                              <span className="icon is-small">
                                <i
                                  className="fas fa-reply"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a className="level-item" aria-label="retweet">
                              <span className="icon is-small">
                                <i
                                  className="fas fa-retweet"
                                  aria-hidden="true"
                                />
                              </span>
                            </a>
                            <a className="level-item" aria-label="like">
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
      </div>
    );
  }
}

export default Post;
