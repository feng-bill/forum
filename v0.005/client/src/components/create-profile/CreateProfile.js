import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";

class CreateProfile extends Component {
  //Component state value -- Fields
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      classStanding: "",
      skills: "",
      projects: "",
      linkedin: "",
      bio: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("submit");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInput;

    if (displaySocialInputs) {
      socialInput = (
        <div>
          <InputGroup
            placeholder="Linkedin profile"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder="Youtube profile"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.instagram}
          />
          <InputGroup
            placeholder="Instagram profile"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    //Select options for status
    const options = [
      { label: "Freshmen", value: "Freshmen" },
      { label: "Sophomore", value: "Sophomore" },
      { label: "Junior", value: "Junior" },
      { label: "Senior", value: "Senior" }
    ];

    return (
      <div>
        <div className="create-profile">
          <div className="container">
            <div className="">
              <h1 className="is-size-1 has-text-centered">
                Create Your Profile
              </h1>
              <p className="has-text-centered">Give me some info</p>
              <small className="column is-7">* = required field</small>

              <form onSubmit={this.onSubmit}>
                {/* profile handle - textfieldgroup */}
                <TextAreaFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  errors={errors.handle}
                  info="A unique handle for your profile URL."
                />
                <SelectListGroup
                  placeholder="* Class Standing"
                  name="classStanding"
                  value={this.state.classStanding}
                  onChange={this.onChange}
                  options={options}
                  errors={errors.classStanding}
                  info="What year are you?"
                />
                <TextFieldGroup
                  placeholder="Linkedin"
                  name="linkedin"
                  value={this.state.linkedin}
                  onChange={this.onChange}
                  errors={errors.linkedin}
                  info="Show off your linked for exposure"
                />

                <div>
                  <button
                    onClick={() => {
                      this.setState(prevState => ({
                        //Toggle this piece of input
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="button is-info"
                  >
                    Add social network link
                  </button>
                  <span className="has-text-grey-light">Optional</span>
                </div>
                {socialInput}
                <input
                  type="submit"
                  value="Submit"
                  className="button is-info"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//PropTypes
CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)(CreateProfile);
