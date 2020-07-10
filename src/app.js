import React, { Component, Suspense } from "react";
import { Router, LocationProvider } from "@reach/router";

import { CircularProgress } from "@material-ui/core";

import { hot } from "react-hot-loader";

import TopNav from "Molecules/appBar/TopNav.jsx";

const Home = React.lazy(() => import("./views/Home.jsx"));
const Login = React.lazy(() => import("./views/Login.jsx"));
const Projects = React.lazy(() =>
  import("./store/containers/projects/ProjectView")
);

class App extends Component {
  render() {
    return (
      <div className="App" fontFamily="fontFamily">
        <LocationProvider>
          <TopNav />
        </LocationProvider>
        <Suspense fallback={<CircularProgress />}>
          <Router>
            <Home path="/" pathname="Home" />
            <Login path="/login" pathname="Login" />
            <Projects path="/projects/:title" pathname="Projects" />
          </Router>
        </Suspense>
      </div>
    );
  }
}

export default hot(module)(App);
