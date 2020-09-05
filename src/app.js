import React, { Component, Suspense } from "react";
import { Router, LocationProvider } from "@reach/router";

import { CircularProgress } from "@material-ui/core";

import { hot } from "react-hot-loader";

import TopNav from "Molecules/appBar/TopNav.jsx";
import Footer from "Molecules/appBar/Footer.jsx";

import "./styles/main.scss";

const Home = React.lazy(() => import("./views/Home.jsx"));
const Login = React.lazy(() => import("./views/Login.jsx"));
const Projects = React.lazy(() =>
  import("./store/containers/projects/ProjectView")
);
const Landing = React.lazy(() => import("./views/Landing.jsx"));

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/main";

class App extends Component {
  render() {
    return (
      <div className="App" fontFamily="fontFamily">
        <ThemeProvider theme={theme}>
          <LocationProvider>
            <TopNav />
          </LocationProvider>
          <Suspense fallback={<CircularProgress />}>
            <Router>
              <Home path="/app" pathname="Home" />
              <Login path="/login" pathname="Login" />
              <Projects path="/app/projects/:title" pathname="Projects" />
              <Landing path="/" pathname="Landing" />
            </Router>
          </Suspense>
          <LocationProvider>
            <Footer />
          </LocationProvider>
        </ThemeProvider>
      </div>
    );
  }
}

export default hot(module)(App);
