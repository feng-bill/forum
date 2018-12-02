import React from "react";
import { getCurrentProfile } from "../../actions/profileActions";

export default () => {
    const { profile, loading } = this.props.profile;
    return (
        <div>
            <p><a href={profile.social.linkedin}>Linkedin</a></p>
            <p><a href={profile.social.instagram}>Instagram</a></p>
        </div>
    );
};






