import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import academic from "./Book.jpg";
import sport from "./Ball.jpg";
import entertainment from "./Entertain.jpg";
import housing from "./Housing.jpg";

class Landing extends Component {
  render() {
    return (
      //using React.Fragment to prevent layering of div
      <React.Fragment>
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
          <div className="columns">
            <div className="column is-one-quarter" />
            <div className="column is-one-quarter">
              <div className="card">
                <Link to={"/feed"}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={academic} alt="Academic" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media media-left">

                      <div className="media-content">
                        <p className="title is-4">Academic</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="column is-one-quarter">
              <div className="card">
                <Link to={"/"}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={sport} alt="Sport" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media media-left">

                      <div className="media-content">
                        <p className="title is-4">Sports</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-one-quarter" />
            <div className="column is-one-quarter">
              <div className="card">
                <Link to={"/"}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={entertainment} alt="Entertainment" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media media-left">
                      <div className="media-content">
                        <p className="title is-4">Entertainment</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="column is-one-quarter">
              <Link to={"/"}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={housing} alt="Housing" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media media-left">
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
      </React.Fragment>
    );
  }
}

export default Landing;
