import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// Form imports
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

// Local Forms imports
import WeeklyNewResource from "../Forms/resources/WeeklyNewResource.jsx";
import DailyNewResource from "../Forms/resources/DailyNewResource.jsx";
import SourceNewResource from "../Forms/resources/SourceNewResource.jsx";
import ToolsNewResource from "../Forms/resources/ToolsNewResource.jsx";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const handleChange = (e) => props.setActiveTab(e.target.value);
  const handleFormsChanges = (e) => console.log(e);

  const renderSwitch = (param) => {
    switch (param) {
      case "Weekly":
        return <WeeklyNewResource handleForm={handleFormsChanges} />;
      case "Daily":
        return <DailyNewResource handleForm={handleFormsChanges}/>;
      case "Tools":
        return <ToolsNewResource handleForm={handleFormsChanges}/>;
      case "Source":
        return <SourceNewResource handleForm={handleFormsChanges}/>;
      default:
        "S";
        break;
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={() => props.onClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h4>{props.activeTab}</h4>
            <FormControl variant="filled" fullWidth={true}>
              <InputLabel id="trello-list-input">Lista</InputLabel>
              <Select
                labelId="trello-list-input"
                id="trello-list-inputs"
                value={props.activeTab}
                onChange={handleChange}
                autoWidth={true}
              >
                <MenuItem value={"Weekly"}>Weekly</MenuItem>
                <MenuItem value={"Daily"}>Daily</MenuItem>
                <MenuItem value={"Source"}>Source</MenuItem>
                <MenuItem value={"Tools"}>Tools</MenuItem>
              </Select>
            </FormControl>
            <div>{renderSwitch(props.activeTab)}</div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
