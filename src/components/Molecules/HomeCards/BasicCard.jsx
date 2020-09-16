import React from "react";
import { Link } from "@reach/router";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {},
  media: {
    height: 200,
  },
});

export default function BasicCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/app/projects/${props.project.id}`}>
          <CardMedia
            className={classes.media}
            image={props.project.thumb}
            title={props.project.title}
          />
        </Link>
        <CardContent>
          <Link to={`/app/projects/${props.project.id}`}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.project.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.project.description}
            </Typography>
          </Link>
          <IconButton color="error" aria-label="Delete Heroe">
            <DeleteIcon
              onClick={() =>
                props.deleteProject({
                  title: props.project.title,
                  id: props.project.id,
                })
              }
              color="error"
            />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
