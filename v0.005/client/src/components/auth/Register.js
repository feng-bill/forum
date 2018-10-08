import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Register.css";
import axios from "axios";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

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
    console.log(newUser);

    this.props.registerUser(newUser);

    // axios
    //   .post("/api/users/register", newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    //destructing
    //const errors = this.state.errors;
    const { errors } = this.state;

    const { user } = this.props.auth;

    return (
      <div className="register">
        {/* {user ? user.name : null } */}
        <h1>Sign Up</h1>
        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              className={classnames("input", {
                "is-danger": errors.name
              })}
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}  
            />
            {/*invalid error message*/}
            {errors.name && <div className="is-danger">{errors.name}</div>}
          </div>
          <div>
            <input
              type="email"
              className={classnames("defaultClassName", {
                "is-danger": errors.email
              })}
              placeholder="Email Address"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            {errors.email && <div className="is-danger">{errors.email}</div>}
          </div>
          <div>
            <input
              type="password"
              className={classnames("defaultClassName", {
                "is-danger": errors.password
              })}
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            {errors.password && (
              <div className="is-danger">{errors.password}</div>
            )}
          </div>
          <div>
            <input
              type="password"
              className={classnames("form-control", {
                "is-invalid": errors.password2
              })}
              placeholder="Confirm Password"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
            />
            {errors.password2 && (
              <div className="is-invalid">{errors.password2}</div>
            )}
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

Register.PropTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateTopProps = state => ({
  auth: state.auth //this comes from rootreducer
});

export default connect(
  mapStateTopProps,
  { registerUser }
)(Register);
