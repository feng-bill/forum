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
            <div className="container">
              <div className="box">
                <h1 className="title">Spartan Forum</h1>
              </div>
            </div>
          </div>
        </section>
        <div className="body">
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <p>
                  <a href="/">Home</a> > <a href="/school">School</a> >{" "}
                  <a href="javascript:window.location.href=window.location.href">
                    Post
                  </a>
                </p>
              </div>
            </div>
          </nav>

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
                            <small>@johnsmith</small> <small>1d</small>
                            <br />I am currently minoring in CS. What electives
                            do you recommend?
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
                      <figure className="media-left">
                        <p className="image is-64x64">
                          <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </p>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>Barbara Middleton</strong>
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis porta eros lacus, nec ultricies elit
                            blandit non. Suspendisse pellentesque mauris sit
                            amet dolor blandit rutrum. Nunc in tempus turpis.
                            <br />
                            <small>
                              <a>Like</a> · <a>Reply</a> · 3 hrs
                            </small>
                          </p>
                        </div>

                        <article className="media">
                          <figure className="media-left">
                            <p className="image is-48x48">
                              <img src="https://bulma.io/images/placeholders/96x96.png" />
                            </p>
                          </figure>
                          <div className="media-content">
                            <div className="content">
                              <p>
                                <strong>Sean Brown</strong>
                                <br />
                                Donec sollicitudin urna eget eros malesuada
                                sagittis. Pellentesque habitant morbi tristique
                                senectus et netus et malesuada fames ac turpis
                                egestas. Aliquam blandit nisl a nulla sagittis,
                                a lobortis leo feugiat.
                                <br />
                                <small>
                                  <a>Like</a> · <a>Reply</a> · 2 hrs
                                </small>
                              </p>
                            </div>

                            <article className="media">
                              Vivamus quis semper metus, non tincidunt dolor.
                              Vivamus in mi eu lorem cursus ullamcorper sit amet
                              nec massa.
                            </article>

                            <article className="media">
                              Morbi vitae diam et purus tincidunt porttitor vel
                              vitae augue. Praesent malesuada metus sed pharetra
                              euismod. Cras tellus odio, tincidunt iaculis diam
                              non, porta aliquet tortor.
                            </article>
                          </div>
                        </article>

                        <article className="media">
                          <figure className="media-left">
                            <p className="image is-48x48">
                              <img src="https://bulma.io/images/placeholders/96x96.png" />
                            </p>
                          </figure>
                          <div className="media-content">
                            <div className="content">
                              <p>
                                <strong>Kayli Eunice </strong>
                                <br />
                                Sed convallis scelerisque mauris, non pulvinar
                                nunc mattis vel. Maecenas varius felis sit amet
                                magna vestibulum euismod malesuada cursus
                                libero. Vestibulum ante ipsum primis in faucibus
                                orci luctus et ultrices posuere cubilia Curae;
                                Phasellus lacinia non nisl id feugiat.
                                <br />
                                <small>
                                  <a>Like</a> · <a>Reply</a> · 2 hrs
                                </small>
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </article>

                    <article className="media">
                      <figure className="media-left">
                        <p className="image is-64x64">
                          <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </p>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>Joe Doe</strong>
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis porta eros lacus, nec ultricies elit
                            blandit non. Suspendisse pellentesque mauris sit
                            amet dolor blandit rutrum. Nunc in tempus turpis.
                            <br />
                            <small>
                              <a>Like</a> · <a>Reply</a> · 3 hrs
                            </small>
                          </p>
                        </div>
                      </div>
                    </article>

                    <article className="media">
                      <figure className="media-left">
                        <p className="image is-64x64">
                          <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </p>
                      </figure>
                      <div className="media-content">
                        <div className="field">
                          <p className="control">
                            <textarea
                              className="textarea"
                              placeholder="Add a comment..."
                            />
                          </p>
                        </div>
                        <div className="field">
                          <p className="control">
                            <button className="button">Post comment</button>
                          </p>
                        </div>
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
