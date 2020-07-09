import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import LockIcon from "@material-ui/icons/Lock";
import LoginForm from "Molecules/Forms/Login.jsx";
import Button from "@material-ui/core/Button";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Button
          variant="contained"
          color="primary"
          href="https://api.workee.site/auth/signin"
        >
          <LockIcon />
          Login with Microsoft
        </Button>
        <div className="login-form">
          <h1>Inicia sesión</h1>
          <LoginForm />
        </div>
      </Container>
    );
  }
}
