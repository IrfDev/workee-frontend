import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
      />
      <Button
        variant="contained"
        size="medium"
        color="primary"
        endIcon={<ExitToAppIcon />}
      >
        Iniciar sesión
      </Button>
    </form>
  );
}
