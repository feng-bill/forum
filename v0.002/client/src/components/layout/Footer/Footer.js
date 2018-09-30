import React from 'react';  //Currently is Stateless component. Removed {Component}
                            //Use Stateless, when there no functionality intented. 
import './Footer.css'


// class Footer extends Component {}
const Footer = () => {
    return (
      <div>
        <footer className="footer is-primary">
          <div className="container">
            <div className="columns">
            <div className="column">  
              <p> @ 2017 Footer info</p>
            </div>
            <div className="column has-text-right">
              <a className="icon" href="http://www.google.com"><i className="fa fa-facebook"></i></a>
              <a className="icon" href="http://www.google.com"><i className="fa fa-twitter"></i></a>
            </div>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;
