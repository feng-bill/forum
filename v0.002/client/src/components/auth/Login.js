import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div id="login">
                <div className="login-card">

                    <div className="card-title">
                        <h1>Please Sign In</h1>
                    </div>

                    <div className="content">
                        <form method="POST" action="#">

                            <input id="email" type="email" name="email" title="email" placeholder="Email" required autofocus></input>
                            <input id="password" type="password" name="password" title="password" placeholder="Password" required></input>

                            <div className="level options">
                                <div className="checkbox level-left">
                                    <input type="checkbox" id="checkbox" className="regular-checkbox"></input>
                                    <label for="checkbox"></label>
                                    <span>Remember me</span>
                                </div>

                                <Link className="btn btn-link level-right" href="#">Forgot Password?</Link>
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
export default Login;