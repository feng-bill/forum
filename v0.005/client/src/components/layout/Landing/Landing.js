import React, { Component } from "react";
import "./Landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="top-padding ">
          <div className="home-img">
            <img
              className="home-img"
              alt=""
              src="http://media.massal.net/san-jose-state/x/tower-hall-auditorium-fountain-san-jose-state-campus-090919-p.jpg"
            />
          </div>
          <div className="centered">
            <h1 className="center-text">Dream Deep...Deeper</h1>
          </div>
        </div>

        <div className="section">
          <hr className="hr" />

          <section className="container about-us">
            <div className="has-text-centered">
              <h1 className="title">Our Mission</h1>
              <h1 className="subtitle">
                The submarin team is Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc sed ante egestas, semper augue ac, aliquam
                magna. Etiam fringilla sem sem, vitae egestas ante semper
                egestas. Morbi nec lorem sed tellus aliquam dapibus. Vestibulum
                gravida rhoncus felis in fermentum. Praesent sodales tristique
                ullamcorper. Praesent semper neque libero, at blandit nisl
                imperdiet a. Etiam laoreet interdum velit, non pharetra libero.
                Sed non risus diam. Phasellus vel placerat ex. Donec ac est
                ante.
              </h1>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
