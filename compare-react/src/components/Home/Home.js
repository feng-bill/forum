import React, { Component } from "react";
import "./Home.css";
import * as firebase from "firebase";
import { Link } from "react-router-dom";
import cardPic1 from "./Book.jpg";
import cardPic2 from "./Ball.jpg";
import cardPic3 from "./Entertain.jpg";
import cardPic4 from "./Housing.jpg";
//import Tabs from "./Tab.js";
//import Pane from "./Pane.js";
/*  

        */

class Home extends Component {
  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }

  componentDidMount() {
    //creating a root reference to my reatime database. firebase
    //treating the child of react as my databse

    const rootRef = firebase
      .database()
      .ref()
      .child("forum");
    const speedRef = rootRef.child("speed");
    //on method = allows us to synchronize data in real time.
    //always attach to a reference that points to a spot in db
    speedRef.on("value", snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1> {this.state.speed}</h1>
        </div>
        <div>
          <p>{this.state.root}</p>
        </div>

        <section className="hero is-medium has-bg-img">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Spartan Forum</h1>
              <h2 className="subtitle"></h2>
            </div>
          </div>
        </section>

        <div className="body">

          <div className="columns">
          <div className="column is-one-quarter"></div>
            <div className="column is-one-quarter">
            <div className="card">
                <Link to={"/school"}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src={cardPic1}
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
                </Link>
                
              </div>
            </div>

            <div className="column is-one-quarter">
            <div className="card">
                <Link to={"/"}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src={cardPic2}
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left" />
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
          <div className="column is-one-quarter"></div>
            <div className="column is-one-quarter">
              <div className="card">
                <Link to={"/"}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src={cardPic3}
                        alt="Placeholder image"
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
                </Link>
                
              </div>
            </div>

            <div className="column is-one-quarter">
            <Link to={"/"}>
              <div className="card">
                
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src={cardPic4}
                        alt="Placeholder image"
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

export default Home;
