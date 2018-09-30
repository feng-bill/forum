import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //when ever user type, use this function => set input into the state variable.
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        //to change component state
        //name: this.state.value
    }

    onSubmit(x) {
        //  Prevent deafult behavior
        x.preventDefault();

        //Register user -- Will use redux
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        console.log(newUser);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {/* name */}
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input"
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange.bind(this)} />
                        </div>
                    </div>

                    {/* email */}
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input"
                                type="email"
                                placeholder="BILLI@OP.COM"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange} //onChange={this.onChange.bind(this)} 
                            />

                        </div>
                    </div>

                    {/*password*/}
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>

                    {/*confirm*/}
                    <div className="field">
                        <label className="label">Password Confirmation</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input"
                                type="password"
                                placeholder="Type Password Again"
                                name="password2"
                                value={this.state.password2}
                                onChange={this.onChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button type='submit' className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-text">Cancel</button>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}
export default Register;