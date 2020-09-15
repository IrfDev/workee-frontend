import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";

import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    height: "100%",
  },
});

export default function RepoCard(props) {
  const classes = useStyles();

  return !props.home ? (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.repo.info.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.repo.info.description}
          </Typography>
          {props.repo.technologies && props.repo.technologies.length ? (
            props.repo.technologies.map((tech, techIndex) => (
              <Chip label={tech} color="primary" size="small" key={techIndex} />
            ))
          ) : (
            <Chip
              className="mt-3"
              label={props.repo.info.language || "JavaScript"}
              color="primary"
              size="small"
            />
          )}
          <Divider light />
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="secondary">
          <DeleteIcon />
        </Button> */}
        <Button href={props.repo.info.html_url} size="small" color="primary">
          <OpenInBrowserIcon />
        </Button>
        {props.deleteResource ? (
          <IconButton aria-label="Delete Heroe">
            <DeleteIcon
              color="error"
              onClick={() =>
                props.deleteResource({
                  resourceId: props.repo.id,
                  target: "resources.repos",
                })
              }
            />
          </IconButton>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  ) : (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.repo.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.repo.description}
          </Typography>
          <Chip
            className="mt-3"
            label={props.repo.language || "JavaScript"}
            color="primary"
            size="small"
          />
          <Divider light />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
