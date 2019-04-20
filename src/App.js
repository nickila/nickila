import React, { Component } from 'react';
import './App.css';
import Name from "./components/Name";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Animation from "./components/Animation";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Name} />
            <Route exact path="/animation" component={Animation} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
