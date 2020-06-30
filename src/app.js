import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Router } from "@reach/router";
import TopNav from "./components/Molecules/appBar/TopNav.jsx";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Projects from "./store/containers/projects/ProjectView";

class App extends Component {
  render() {
    return (
      <div className="App" fontFamily="fontFamily">
        <TopNav />
        <Router>
          <Home path="/" pathname="Inicio" />
          <Login path="/login" pathname="Login" />
          <Projects path="/projects/:title" pathname="Projects" />
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);
