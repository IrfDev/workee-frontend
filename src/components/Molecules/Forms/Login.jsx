import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { navigate, redirectTo } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function LoginForm() {
  const GET_LOGIN = gql`
    mutation GetLogin($email: String!, $password: String!) {
      getLogin(input: { email: $email, password: $password }) {
        token
        usuario
      }
    }
  `;

  const classes = useStyles();
  // Hooks ⚓️
  const [getLogin, { data }] = useMutation(GET_LOGIN);

  const [emailInput, setEmailInput] = useState("");

  const [passwordInput, setPasswordInput] = useState("");

  // Handlers

  const handlingInput = (e, target) => {
    e.persist();
    if (target === "email") {
      setEmailInput(e.target.value);
    } else {
      setPasswordInput(e.target.value);
    }
  };

  const onSubmit = async () => {
    const response = await getLogin({
      variables: { email: emailInput, password: passwordInput },
    });
    localStorage.setItem("token", response.data.getLogin.token);

    navigate("/");
  };

  const token = localStorage.getItem("token");
  console.log("getToken", token);

  if (token) redirectTo("/");

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        onChange={(e) => handlingInput(e, "email")}
        label="Email"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        onChange={(e) => handlingInput(e, "password")}
      />
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={onSubmit}
        endIcon={<ExitToAppIcon />}
      >
        Iniciar sesión
      </Button>
    </form>
  );
}
