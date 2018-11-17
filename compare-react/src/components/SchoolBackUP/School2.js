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
                    <strong>What class do you recommend?</strong> <small>@johnsmith</small>{" "}
                    <small>1d</small>
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
            <div className="field is-grouped is-pulled-right">
              <a className="button is-primary">
                <span>Submit</span>
              </a>
              <a className="button" type="reset" value ="Clear">Clear</a>
            </div>
          </div>
         
          <nav className="pagination" role="navigation" aria-label="pagination">
            <a
              className="pagination-previous"
              title="This is the first page"
              disabled
            >
              Previous
            </a>
            <a className="pagination-next">Next page</a>
            <ul className="pagination-list">
              <li>
                <a
                  className="pagination-link is-current"
                  aria-label="Page 1"
                  aria-current="page"
                >
                  1
                </a>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 2">
                  2
                </a>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 3">
                  3
                </a>
              </li>
            </ul>
          </nav>
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
                    <strong>How hard is CS 146?</strong> <small>@johnsmith</small>{" "}
                    <small>31m</small>
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
                    <strong>Bus 118D or Bus 118W?</strong> <small>@johnsmith</small>{" "}
                    <small>10m</small>
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
            <div className="field is-grouped is-pulled-right">
              <a className="button is-primary">
                <span>Submit</span>
              </a>
              <a className="button">Clear</a>
            </div>
          </div>
   
          <nav className="pagination" role="navigation" aria-label="pagination">
            <a
              className="pagination-previous"
              title="This is the first page"
              disabled>
              Previous
            </a>
            <a className="pagination-next">Next page</a>
            
           
            <ul className="pagination-list">
              <li>
                <a
                  className="pagination-link is-current"
                  aria-label="Page 1"
                  aria-current="page"
                >
                  1
                </a>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 2">
                  2
                </a>
              </li>
              <li>
                <a className="pagination-link" aria-label="Goto page 3">
                  3
                </a>
              </li>
            </ul>
          </nav>
        </TabPanel>
      </Tabs>
    );
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
            <div className="column is-two-thirds">{displayPosts}</div>
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
