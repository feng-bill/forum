import React, { Component } from "react";
import "./School.css";
//import PropType from "prop-types";
//import Tabs from "/forum/compare-react/src/components/Tab/Tab";
//import Pane from "/forum/compare-react/src/components/Tab/Tab";
//import TabApp from '/forum/compare-react/src/components/Tab/TabApp';
//const $ = window.$;
const TABS = [...document.querySelectorAll('#tabs li')];
const CONTENT = [...document.querySelectorAll('#tab-content p')];
const ACTIVE_CLASS = 'is-active';

function initTabs() {
    TABS.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        let selected = tab.getAttribute('data-tab');
        updateActiveTab(tab);
        updateActiveContent(selected);
      })
    })
}

function updateActiveTab(selected) {
  TABS.forEach((tab) => {
    if (tab && tab.classList.contains(ACTIVE_CLASS)) {
      tab.classList.remove(ACTIVE_CLASS);
    }
  });
  selected.classList.add(ACTIVE_CLASS);
}

function updateActiveContent(selected) {
  CONTENT.forEach((item) => {
    if (item && item.classList.contains(ACTIVE_CLASS)) {
      item.classList.remove(ACTIVE_CLASS);
    }
    let data = item.getAttribute('data-content');
    if (data === selected) {
      item.classList.add(ACTIVE_CLASS);
    }
  });
}

initTabs();
  
class School extends Component {
  constructor(props) {
    super(props);
    
    this.state = {isToggleOn: false};
    initTabs();
    //this.handleClick = this.handleClick.bind(this);    
  }

  //handleClick() {
  //  this.setState(prevState => ({
  //    isToggleOn: !prevState.isToggleOn
  //  })); 
  //}


  //componentDidmount() {
   // $("#test").click(function() {
    //  $("#guide-tabs li:eq(1) a").tab("show");
    //});
    //constructor(props) {
    //  super(props);
    //this.state = { isToggleOn: false };
    //this.aClick = this.aClick.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  //}

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

              <div className ="tabs is-toggle is-fullwidth" id="tabs">
                <ul>
                  <li className ="is-active" data-tab="1">
                    <a>
                      <span className ="icon is-small">
                        <i className ="fa fa-image" />
                      </span>
                      <span>Pictures</span>
                    </a>
                  </li>
                  <li data-tab="2">
                    <a>
                      <span className ="icon is-small">
                        <i className ="fa fa-music" />
                      </span>
                      <span>Music</span>
                    </a>
                  </li>
                  <li data-tab="3">
                    <a>
                      <span className ="icon is-small">
                        <i className ="fa fa-film" />
                      </span>
                      <span>Videos</span>
                    </a>
                  </li>
                  <li data-tab="4">
                    <a>
                      <span className ="icon is-small">
                        <i className ="fa fa-file-text-o" />
                      </span>
                      <span>Documents</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="tab-content">
                <p className ="is-active" data-content="1">
                  Pictures
                </p>
                <p data-content="2">Music</p>
                <p data-content="3">Videos</p>
                <p data-content="4">Documents</p>
              </div>



              <div className="tabs">
                <ul id="guide-tabs">
                  <li className="is-active">
                    <a href="#link1" data-toggle="tab">
                      Popular
                    </a>
                  </li>
                  <li>
                    <a href="#link2" data-toggle="tab">
                      New
                    </a>
                  </li>
                </ul>
              </div>

              <div className ="tab-content">
                <div className="tab-pane is-active" id="Popular">
                  <div className="box">
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
                            <strong>Example Posting</strong>{" "}
                            <small>@johnsmith</small> <small>31m</small>
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

                <div className="tab-pane" id="New">
                  <div className="box">
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
                            <strong>Example Posting</strong>{" "}
                            <small>@johnsmith</small> <small>31m</small>
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
                <nav
                  className="pagination"
                  role="navigation"
                  aria-label="pagination"
                >
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
