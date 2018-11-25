import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card">
        <div>
          <img src={profile.user.avatar} />
        </div>
        <div>
          <h3>{profile.user.name}</h3>
        </div>
        <p>
          {profile.standing}
          {/*isEmpty(profile.company) ? null : (<span>at{profile.company}</span>)*/}
        </p>
        <Link to={`profile/${profile.handle}`} classNames="button is-info">
          View Info
        </Link>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
