import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

export default class Landing extends Component {
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
          <div className="container">
            <h1 className="title">Section Title</h1>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <Link to={"/School"}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left" />
                      <div className="media-content">
                        <p className="title is-4">School</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="column is-one-third">
              <Link to={"/"}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left" />
                      <div className="media-content">
                        <p className="title is-4">Choosing Classes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="columns">
            <div className="column is-one-third">
              <Link to={"/"}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left" />
                      <div className="media-content">
                        <p className="title is-4">Entertainment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="column is-one-third">
              <Link to={"/"}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left" />
                      <div className="media-content">
                        <p className="title is-4">Housing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
