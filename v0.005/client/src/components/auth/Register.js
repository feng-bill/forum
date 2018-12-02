import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Register.css";
import logo from "../../assets/quadrapodB.jpg";
import { withRouter } from "react-router-dom";
//import axios from "axios";
// import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);

    // axios
    //   .post("/api/users/register", newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    //destructing
    //const errors = this.state.errors;
    const { errors } = this.state;

    return (
      <div>
        <section className="hero is-light">
          <div className="logo-contain">
            <figure className="image is-128x128">
              <img alt="" style={{ marginTop: 50 }} className="is-rounded" src={logo} />
            </figure>
          </div>
          <h1 style={{ paddingBottom: 20 }} className="is-size-4 has-text-centered">
            Sign Up
          </h1>
          <div id="login-page" className="card">
            <div className="login">
              <div className="login-content">
                <form onSubmit={this.onSubmit}>
                  <div class="field">
                    <label class="label">Your Name</label>
                    <div class="control">
                      <TextFieldGroup
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={errors.name}
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Email Address</label>
                    <div class="control">
                      <TextFieldGroup
                        placeholder="Email Address"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
                      //info="This site uses Gravatar for profile image"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                      <TextFieldGroup
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Confirm Password</label>
                    <div class="control">
                      <TextFieldGroup
                        placeholder="Confirm Password"
                        name="password2"
                        type="password"
                        value={this.state.password2}
                        onChange={this.onChange}
                        error={errors.password2}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="button is-primary is-large is-fullwidth is-outlined"
                  >
                    Register
                </button>
                </form>
              </div>
            </div>
          </div>
        </section >
      </div>

    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateTopProps = state => ({
  auth: state.auth, //this comes from rootreducer
  errors: state.errors
});

export default connect(
  mapStateTopProps,
  { registerUser }
)(withRouter(Register));
