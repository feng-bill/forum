import React, { Component } from 'react';   //Currently, Statefull. B/c is with, "{Component}"
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './components/layout/Home/Home';
import Faq from './components/layout/Faq/Faq';
import About from './components/layout/About/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import { Route } from 'react-router-dom';

class App extends Component {

  //Outside is for Component Logic

  //Redner JSX
  //JSX uses className, NOT <div class="">

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact={true} path="/" component={Home} />
        <div className='container'>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/about" component={About} />

        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
