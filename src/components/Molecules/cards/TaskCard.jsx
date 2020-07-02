import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ShareIcon from "@material-ui/icons/Share";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
          {props.task.Name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.task.date}
        </Typography>
        <Typography variant="body2" component="p">
          {props.task.description}
        </Typography>
      </CardContent>
      <CardActions>
        <ShareIcon />
      </CardActions>
    </Card>
  );
}
