import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Modal from "@material-ui/core/Modal";

import NewProject from "../Molecules/Forms/NewProject.jsx";

const useStyles = makeStyles((theme) => ({
  button: {
    position: "fixed",
    marginTop: "85vh",
    marginLeft: "45vw",
    zIndex: 2,
  },
  paper: {
    display: "flex",
    marginTop: "20vh",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
  },
}));

export default function SimpleModal() {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        color="primary"
        className={classes.button}
        endIcon={<Icon>add</Icon>}
      >
        Nuevo proyecto
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <NewProject />
        </div>
      </Modal>
    </div>
  );
}
