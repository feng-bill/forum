import React, { Component } from "react";
import "./Home.css";
import * as firebase from "firebase";
import { Link } from "react-router-dom";
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
                        alt="Placeholder image"
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
                        alt="Placeholder image"
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
