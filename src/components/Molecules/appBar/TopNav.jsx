import React from "react";

import { Link, useLocation, navigate } from "@reach/router";

import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Logo from "Atoms/utils/Logo.jsx";

const useStyles = makeStyles((theme) => ({
  logo: {
    paddingRight: "30px",
    marginRight: "40px",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {location.pathname.includes("projects") ? (
            <ArrowBackIcon onClick={() => navigate(-1)} />
          ) : (
            <></>
          )}
          <div className={classes.sectionMobile}>
            <Link to="/">
              <Logo width="45" class="logoImg" />
            </Link>
          </div>
          <div className={classes.sectionDesktop}>
            <Link to="/">
              <Logo width="500" class="logoImg" />
            </Link>
          </div>
          <Typography className={classes.title} variant="h6" noWrap>
            {props.message}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}></div>
          <div className={classes.sectionMobile}></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
