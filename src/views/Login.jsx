import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";

export default class Login extends Component {
  render() {
    return (
      <>
        <Button
          variant="contained"
          color="primary"
          href="https://api.workee.site/auth/signin"
        >
          <LockIcon />
          Login with Microsoft
        </Button>
      </>
    );
  }
}
