import React, { useState, Suspense } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Modal from "@material-ui/core/Modal";

const NewProject = React.lazy(() => import("Molecules/Forms/NewProject.jsx"));

const useStyles = makeStyles((theme) => ({
  button: {
    position: "fixed",
    bottom: "2%",
    right: "4%",
    zIndex: 2,
  },
  paper: {
    display: "flex",
    marginTop: "10vh",
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
        size="large"
        className={classes.button}
      >
        New Project +
      </Button>
      <Suspense fallback={<h6>Cargando...</h6>}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-dºescription"
          className="row m-0 justify-content-center"
        >
          <div className={`${classes.paper} col-lg-5 col-12`}>
            <NewProject />
          </div>
        </Modal>
      </Suspense>
    </div>
  );
}
