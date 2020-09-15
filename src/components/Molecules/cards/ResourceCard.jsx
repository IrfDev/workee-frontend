import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";

import LabelIcon from "@material-ui/icons/Label";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    margin: "auto",
  },
  bullet: {
    display: "inline-block",

    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
});

export default function ResourceCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.resource.name}
        </Typography>

        {props.resource.tags.map((tag, tagIndex) => (
          <Chip
            key={tagIndex}
            label={tag}
            variant="outlined"
            color="primary"
            size="small"
            icon={<LabelIcon />}
          />
        ))}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={props.resource.website}>
          <OpenInBrowserIcon />
        </Button>
        <Button size="small" aria-label="Delete Heroe">
          <DeleteIcon
            onClick={() =>
              props.deleteResource({
                resourceId: props.resource.id,
                target: "resources.resources",
              })
            }
            color="error"
          />
        </Button>
      </CardActions>
    </Card>
  );
}
