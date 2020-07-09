import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import CardMedia from "@material-ui/core/CardMedia";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  media: {
    height: 80,
    borderRadius: "4px",
    minWidth: "80px",
    marginRight: "1em",
  },
}));

export default function ReadItem(props) {
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
      </ListItemAvatar>
      <ListItemText
        primary={props.title}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            />
            {props.description}
          </React.Fragment>
        }
      />
      <Divider light={true} absolute={true} />
    </ListItem>
  );
}
