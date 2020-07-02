import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import LabelIcon from "@material-ui/icons/Label";
import Typography from "@material-ui/core/Typography";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 150,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
        {props.resource.tags.map((tag) => (
          <Chip
            key={Math.random()}
            label={tag}
            variant="outlined"
            color="primary"
            size="small"
            icon={<LabelIcon />}
          />
        ))}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={props.resource.url}>
          <OpenInBrowserIcon />
          Abrir
        </Button>
      </CardActions>
    </Card>
  );
}
