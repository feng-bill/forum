import React, { Component } from "react"; //Currently, Statefull. B/c is with, "{Component}"

import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Landing from "./components/layout/Landing/Landing";
import Faq from "./components/layout/Faq/Faq";
import About from "./components/layout/About/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact={true} path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/about" component={About} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
