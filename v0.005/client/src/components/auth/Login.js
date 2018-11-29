import React, { Component } from "react";
import "./Login.css";
import logo from "../../assets/quadrapodB.jpg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import classnames from "classnames";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.spell = this.spell.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }


  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData)

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // spell() {
  //   for (let i in this.state.errors) {
  //     alert("Password: " + JSON.stringify(this.state.errors[i].password))
  //     alert("Email: " + JSON.stringify(this.state.errors[i].email))
  //   }
  // }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <section className="hero is-light">
          <div className="logo-contain">
            <figure className="image is-128x128">
              <img style={{ marginTop: 50 }} className="is-rounded" src={logo} />
            </figure>
          </div>

          <h1 style={{ paddingBottom: 20 }} className="is-size-4 has-text-centered">
            Sign in to Quadrapod
          </h1>
          <div id="login-page" className="card">
            <div className="login">
              <div className="login-content">
                <form onSubmit={this.onSubmit}>
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
                  <button
                    type="submit"
                    className="button is-primary is-large is-fullwidth is-outlined"
                  >
                    Login
                </button>
                </form>

              </div>
            </div>
          </div>
        </section>
        {"Password: " + JSON.stringify(this.state.errors[0])}
      </div>

    );
  }
}

//Create Prop types
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
