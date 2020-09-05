import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <div className="row justify-content-center">
      <div className="col-lg-4 col-6">
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Workee avatar"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Boost your productivity! "
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Debbie Rican
                </Typography>
                {
                  " — I'll try it for two projects and now my dev carreer depends on it"
                }
              </React.Fragment>
            }
          />
        </ListItem>
      </div>
      <div className="col-lg-4 col-6">
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Workee avatar"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Change my daily work"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Rocky Round
                </Typography>
                {" —Wish I was discoverd Workee two years ago"}
              </React.Fragment>
            }
          />
        </ListItem>
      </div>
    </div>
  );
}
