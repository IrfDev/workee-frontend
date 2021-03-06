import React, { Suspense } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";
import ShareIcon from "@material-ui/icons/Share";
import BuildIcon from "@material-ui/icons/Build";

// Local Components
const NewResourceForm = React.lazy(() =>
  import("Molecules/Forms/NewResource.jsx")
);

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
    display: "flex",
  },
  fabButton: {
    backgroundColor: "#03DAC5",
    color: "#33333",
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  IconButton: {
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justiyfContent: "center",
    margin: ".8em",
  },
  Container: {
    margin: 0,
  },
}));

export default function BottomAppBar({
  setActiveTab,
  activeNav,
  activeProject,
}) {
  const classes = useStyles();
  const [openModal, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="row m-0 p-0 justify-content-center">
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        className={[classes.appBar, "col-12 col-md-4 col-lg-6 bottom-navbar"]}
      >
        <Toolbar
          className={`d-flex align-items-center justify-content-between`}
        >
          <div
            onKeyDown={() => setActiveTab("Weekly")}
            onClick={() => setActiveTab("Weekly")}
            tabIndex={0}
            role="button"
            aria-label="open drawer"
            className={`${classes.IconButton} ${
              activeNav === "Weekly" ? "activeTab" : ""
            }`}
          >
            <DragHandleIcon className="menu-icon" />
            <span>Weekly</span>
          </div>
          <div
            color="inherit"
            aria-label="open drawer"
            className={`${classes.IconButton} ${
              activeNav === "Daily" ? "activeTab" : ""
            }`}
            onKeyDown={() => setActiveTab("Daily")}
            onClick={() => setActiveTab("Daily")}
            tabIndex={0}
            role="button"
          >
            <CheckIcon className="menu-icon" />
            <span>Daily</span>
          </div>
          <Suspense fallback={<h1>Loading...</h1>}>
            <NewResourceForm
              activeProject={activeProject}
              open={openModal}
              onClose={handleClose}
              activeTab={activeNav}
              setActiveTab={setActiveTab}
            />
          </Suspense>
          <Fab
            aria-label="add"
            className={classes.fabButton}
            onClick={() => handleOpen()}
          >
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <div
            onKeyDown={() => setActiveTab("Source")}
            onClick={() => setActiveTab("Source")}
            tabIndex={0}
            role="button"
            color="inherit"
            className={`${classes.IconButton} ${
              activeNav === "Source" ? "activeTab" : ""
            }`}
          >
            <ShareIcon className="menu-icon" />
            <span>Source</span>
          </div>
          <div
            onClick={() => setActiveTab("Tools")}
            onKeyDown={() => setActiveTab("Tools")}
            tabIndex={0}
            color="inherit"
            role="button"
            className={`${classes.IconButton} ${
              activeNav === "Tools" ? "activeTab" : ""
            }`}
          >
            <BuildIcon className="menu-icon" />
            <span>Tools</span>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
