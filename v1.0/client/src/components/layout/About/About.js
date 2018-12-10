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
              Quadrapod was founded in spring of 2018. We are a group of San Jose State University students
              majoring in Management Information Systems. We are passionate and dedicated in learning how
              to bridge the gap between Business and Information Systems. Our mission is to create a platform
              to unite all students. We hope that all students can adapt to university life and become familiar
              with the university very quickly. We believe that our forum will benefit all the students.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
