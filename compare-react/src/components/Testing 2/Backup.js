import React, { Component } from "react";
import "./School.css";
import PropType from 'prop-types';
//import Tabs from "/forum/compare-react/src/components/Tab/Tab";
//import Pane from "/forum/compare-react/src/components/Tab/Tab";
//import TabApp from '/forum/compare-react/src/components/Tab/TabApp';
const $ = window.$;

const Pane = React.createClass({
  displayName: 'Pane',
  propTypes: {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  },
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});
const Tabs = React.createClass({
  displayName: 'Tabs',
  propTypes: {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ]).isRequired
  },
  getDefaultProps() {
    return {
      selected: 0
    };
  },
  getInitialState() {
    return {
      selected: this.props.selected
    };
  },
  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  },
  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <li key={index}>
          <a href="#" 
            className={activeClass}
            onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
        </li>
      );
    }
    return (
      <ul className="tabs__labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  },
  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.selected]}
      </div>
    );
  },
  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
    );
  }
});

class School extends Component {
   constructor() {
     super();
     this.state = {
     selected: 0
     };
   }
  componentDidmount(){
    $("#test").click(function() {
      $('#guide-tabs li:eq(1) a').tab('show');
    })
  //constructor(props) {
  //  super(props);
    //this.state = { isToggleOn: false };
    //this.aClick = this.aClick.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }

  render()  
  {
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
              <div>
        <Tabs selected={0}>
          <Pane label="Tab 1">
            <div>This is my tab 1 contents!</div>
          </Pane>
          <Pane label="Tab 2">
            <div>This is my tab 2 contents!</div>
          </Pane>
          <Pane label="Tab 3">
            <div>This is my tab 3 contents!</div>
          </Pane>
        </Tabs>
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

              <div class="tab-content">
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
