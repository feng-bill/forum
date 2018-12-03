import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";

import pic from "../../assets/bigHero.png";

class Dashboard extends Component {
  //Want this be called right away
  //Life cycle method
  //called ajax request even without redux
  componentDidMount() {
    this.props.getCurrentProfile();
  }




  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      //Check if logged in user has profile data

      if(Object.keys(profile).length > 0){
        dashboardContent =
        <div>
          <h4>Welcome {user.name}</h4>
          <h4>Bio: {profile.handle}</h4>
          <h4>Class standing: {profile.standing}</h4>
          <h4>Major: {profile.major}</h4>
          <h4>Been with us since: {profile.date}</h4>
          <p>Linkedin: <a href={profile.social.linkedin}>{JSON.stringify(profile.social.linkedin)}</a></p>
            
          <p>Instagram: <a href={profile.social.instagram}>{JSON.stringify(profile.social.instagram)}</a></p>
            
        </div >
      }
      else {
        // User is logged in but no profile
        dashboardContent = (
          <div>
            <h1 className="lead text-muted is-size-2 is-capitalized">
              Welcome {user.name}
            </h1>
            <p>
              Looks empty here :( <br />
              Don't be afraid to express yourself!
            </p>
            <br />
            <Link
              to="/create-profile"
              className="button is-large is-info is-outlined"
            >
              Create profile
            </Link>
          </div>
        );
      }
    }

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
        <div className="dashboard">
          <div className="container">
            <div className="columns">
              <div className="column is-three-fifths">
                <h1 className="is-size-1">Dashboard</h1>
                {dashboardContent}
              </div>
              <div class="column">
                <figure className="image is-4by5">
                  <img alt="" src={pic} />
                </figure>
              </div>
              <div class="column" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

//bring two things into the Dashboard
// 1. profile state
// 2. auth state
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
