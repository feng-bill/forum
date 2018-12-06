import React, { Component} from 'react';
import "./Home.css"
import * as firebase from "firebase";

class Home extends Component {


    constructor() {
        super();
        this.state = {
          speed: 10
        }
      }
    
      componentDidMount() {
        //creating a root reference to my reatime database. firebase 
                                                //treating the child of react as my databse

        const rootRef = firebase.database().ref().child('forum');
        const speedRef = rootRef.child('speed');
        //on method = allows us to synchronize data in real time. 
        //always attach to a reference that points to a spot in db
        speedRef.on('value', snap => {
          this.setState( {  
            speed: snap.val()
          })
        })

      }


    render() {
        return (
            <div> 
                <div><h1> {this.state.speed}</h1></div>
                <div><p>{this.state.root}</p></div>
                <div class="trim" >  
                    <figure className="container">
                        <img src="http://old.bz55.com/uploads/allimg/161205/140-161205152S0.jpg"></img>
                    </figure>
                </div>


                <div className="container">
                    <section className="section">
                        <h1 className="title">Section Title</h1>
                        <h2 className="subtitle is-4">China number 1</h2>

                    <div className="columns">
                        <div className="column is-one-third">
                            <div className="card">
                            <div className="card-content">
                                <p className="title"> Title</p>
                                <img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/iu-profile-picture-9.jpg"></img>
                            </div>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="card">
                            <div className="card-content">
                                <p className="title"> Title</p>
                                <img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/iu-profile-picture-9.jpg"></img>
                            </div>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="card">
                            <div className="card-content">
                                <p className="title"> Title</p>
                                <img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/iu-profile-picture-9.jpg"></img>
                            </div>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="card">
                            <div className="card-content">
                                <p className="title"> Title</p>
                                <img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/iu-profile-picture-9.jpg"></img>
                            </div>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="card">
                            <div className="card-content">
                                <p className="title"> Title</p>
                                <img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/iu-profile-picture-9.jpg"></img>
                            </div>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <div className="card">
                            <div className="card-content">
                                <p className="title"> Title</p>
                                <img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/iu-profile-picture-9.jpg"></img>
                            </div>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        );
    }      
}

export default Home;