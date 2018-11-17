import React, { Component } from "react";
import "./School.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../TabCSS/Tab.css";
import { Link } from "react-router-dom";

class School extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0
    };
  }
  render() {
    const displayPosts = (
      <Tabs>
        <TabList>
          <Tab>Popular</Tab>
          <Tab>New</Tab>
        </TabList>

        <TabPanel>
          <div className="box">
            <Link to={"./Post"}>
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
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a className="level-item" aria-label="reply">
                        <span className="icon is-small">
                          <i className="fas fa-reply" aria-hidden="true" />
                        </span>
                      </a>
                      <a className="level-item" aria-label="retweet">
                        <span className="icon is-small">
                          <i className="fas fa-retweet" aria-hidden="true" />
                        </span>
                      </a>
                      <a className="level-item" aria-label="like">
                        <span className="icon is-small">
                          <i className="fas fa-heart" aria-hidden="true" />
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </Link>
          </div>

          <hr />
          <div className="posting">
            <textarea
              className="textarea"
              placeholder="Create your own post..."
            />
            <div className="control">
              <div className="field is-grouped is-pulled-right">
                <input
                  className="button is-primary"
                  type="submit"
                  value="Submit"
                />
                <input className="button" type="reset" value="Reset" />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="box">
            <Link to={"/School"}>
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
                      <strong>How hard is CS 146?</strong>{" "}
                      <small>@johnsmith</small> <small>31m</small>
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a className="level-item" aria-label="reply">
                        <span className="icon is-small">
                          <i className="fas fa-reply" aria-hidden="true" />
                        </span>
                      </a>
                      <a className="level-item" aria-label="retweet">
                        <span className="icon is-small">
                          <i className="fas fa-retweet" aria-hidden="true" />
                        </span>
                      </a>
                      <a className="level-item" aria-label="like">
                        <span className="icon is-small">
                          <i className="fas fa-heart" aria-hidden="true" />
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </Link>
          </div>

          <div className="box">
            <Link to={"/School"}>
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
                      <strong>Bus 118D or Bus 118W?</strong>{" "}
                      <small>@johnsmith</small> <small>10m</small>
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a className="level-item" aria-label="reply">
                        <span className="icon is-small">
                          <i className="fas fa-reply" aria-hidden="true" />
                        </span>
                      </a>
                      <a className="level-item" aria-label="retweet">
                        <span className="icon is-small">
                          <i className="fas fa-retweet" aria-hidden="true" />
                        </span>
                      </a>
                      <a className="level-item" aria-label="like">
                        <span className="icon is-small">
                          <i className="fas fa-heart" aria-hidden="true" />
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </Link>
          </div>
          <hr />
          <div className="posting">
            <textarea
              className="textarea"
              placeholder="Create your own post..."
            />
            <div className="control">
              <div className="field is-grouped is-pulled-right">
                <input
                  className="button is-primary"
                  type="submit"
                  value="Submit"
                />
                <input className="button" type="reset" value="Reset" />
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    );
    return (
      <div>
        <section className="hero is-medium has-bg-img">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Spartan Forum</h1>
              <h2 className="subtitle" />
            </div>
          </div>
        </section>
        <div className="body">
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
              <p>
                <a href="/">Home</a> > {" "}
                <a href="javascript:window.location.href=window.location.href">
                  School
                </a>
              </p>
              </div>
              <div className="level-item">
                <div className="field has-addons">
                  <p className="control is-expanded">
                    <input className="input" type="text" placeholder="Find a post"></input>
                  </p>
                  <p className="control">
                    <button className="button">
                      Search
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </nav>
          <div className="columns">
            <div className="column is-two-thirds">
              {displayPosts}
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

export default School;
