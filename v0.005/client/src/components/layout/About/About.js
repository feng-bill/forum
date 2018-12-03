import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
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
        <div className="content has-text-centered is-wide">
          <h1><strong>About Us</strong></h1>
          <h2>Quadrapod</h2>
          <div className="about">
            <p>
              We are a group of SJSU students dedicated to working on technical and
              Business-oriented projects.
            </p>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
