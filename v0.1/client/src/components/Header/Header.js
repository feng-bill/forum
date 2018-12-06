import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  // using setState and is toogling back and forth 
  // isToogleOn from true and false. 
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    })); 
  }

  

  render() {

  /* add an IS active class onto it base on when this is clicked
    using ternary operator, is active? other wise, nothing*/
    let menuActive = this.state.isToggleOn ? 'is-active' : '';

    return (
      <div className="navbar has-shadow">
        <div className = "container">
          <div className = "navbar-brand">
            <a className="navbar-item">My Forum</a>
          </div>

          <span className="navbar-burger" onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </span>
    
      {/* add an IS active class onto it base on when this is clicked 
        Create menuActive */}

          {/* <div className = "navbar-end navbar-menu" */}
          <div className = {'navbar-end navbar-menu ' + menuActive }>
            <Link to="/" className="navbar-item r-item">Home</Link>
            <Link to="/faq" className="navbar-item r-item">Features</Link>
            <Link to="/about" className="navbar-item r-item">About</Link>
            <Link to="/faq" className="navbar-item r-item">FAQ</Link>
            
            <div className="navbar-item">
             <p className="control">
                <a className="button is-primary is-outlined">
                  <span className="icon">
                    <i className="fa fa-download"></i>
                  </span>
                  <span>Join Now</span>
                </a> 
              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Header;
