import React, { Component } from "react";

import Container from "@material-ui/core/Container";

import LoginForm from "Molecules/Forms/Login.jsx";
import MicrosoftLogin from "Atoms/utils/MicrosoftLogin.jsx";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <MicrosoftLogin />
        <div className="login-form">
          <h1>Inicia sesión</h1>
          <LoginForm />
        </div>
      </Container>
    );
  }
}
