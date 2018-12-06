import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: 'email',
            password: 'password',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(i) {
        this.setState({ [i.target.name]: i.target.value })
    }
    //Can use to replace the effort of using bind(this)
    // onChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
    // }

    onSubmit(i) {
        //  Prevent deafult behavior
        i.preventDefault();

        //Register user -- Will use redux
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios
            .post('api/users/login', user)
            .then(res => console.log(res.data))
            .catch(err => console.log({ errors: err.response.data }));
        console.log(user);
    }


    render() {
        return (
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title has-text-grey">Login</h3>
                            <p className="subtitle has-text-grey">Please login to proceed.</p>
                            <div className="box">
                                <figure className="avatar">
                                    <img alt="" src="https://placehold.it/128x128" />>
                            </figure>
                                <form onSubmit={this.onSubmit}>
                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-large"
                                                type="email"
                                                placeholder="Your Email"
                                                autoFocus=""
                                                name='email'
                                                value={this.state.email}
                                                onChange={this.onChange.bind(this)}
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-large"
                                                type="password"
                                                placeholder="Your Password"
                                                name='password'
                                                value={this.state.value}
                                                onChange={this.onChange.bind(this)}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="checkbox">
                                            <input type="checkbox" />
                                            Remember me
                                        </label>
                                    </div>
                                    <button type="submit" className="button is-block is-info is-large is-fullwidth">Login</button>
                                </form>
                            </div>
                            <p className="has-text-grey">
                                <Link to="../">Sign Up</Link> &nbsp;·&nbsp;
                        <Link to="../">Forgot Password</Link> &nbsp;·&nbsp;
                        <Link to="../">Need Help?</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default Login;