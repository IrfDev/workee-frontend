import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";

import Typography from "@material-ui/core/Typography";

import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 50,
  },
});

export default function RepoCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.repo.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.repo.description}
          </Typography>
          {props.repo.tecnologies.map((tech) => (
            <Chip
              label={tech}
              color="primary"
              size="small"
              key={Math.random()}
            />
          ))}
          <Divider light />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          <DeleteIcon />
        </Button>
        <Button size="small" color="primary">
          <OpenInBrowserIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
