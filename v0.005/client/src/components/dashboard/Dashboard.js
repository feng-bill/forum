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
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h4> TODO: DISPLAY PROFILE</h4>;
      } else {
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
      <div className="dashboard">
        <div className="container">
          <div className="columns">
            <div className="column is-three-fifths">
              <h1 className="is-size-1">Dashboard</h1>
              {dashboardContent}
            </div>
            <div class="column">
              <figure className="image is-4by5">
                <img src={pic} />
              </figure>
            </div>
            <div class="column" />
          </div>
        </div>
      </div>
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
