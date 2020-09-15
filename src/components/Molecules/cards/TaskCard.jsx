import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles({
  root: {
    marginTop: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TaskCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Tarea:
        </Typography>
        <Typography variant="h5" component="h2">
          {props.task.resource.title}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          {props.task.date}
        </Typography> */}
        <Typography variant="body2" component="p">
          {props.task.resource.about}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Complete task">
          <CheckIcon
            onClick={() => props.deleteTask({ resourceId: props.task.id })}
            color="primary"
            className="danger"
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
