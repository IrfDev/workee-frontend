import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function CardBoardItem(props) {
  const classes = useStyles();

  return (
    <div className={classes.demo}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.card.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {props.card.date}
              </Typography>
              {props.card.description}
            </React.Fragment>
          }
        />
        <br />
        <div>
          {props.card.labels.map((label) => (
            <Chip
              size="small"
              variant="outlined"
              key={Math.random()}
              label={label}
              color="secondary"
            />
          ))}
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
}
