import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { blue } from "@material-ui/core/colors";

import Card from "@material-ui/core/Card";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";

import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import ListItemText from "@material-ui/core/ListItemText";

import NoteIcon from "@material-ui/icons/Note";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

export default function NotebookCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <ImportContactsIcon />
          </Avatar>
        }
        action={
          <>
            <IconButton aria-label="Delete Heroe">
              <DeleteIcon
                color="error"
                onClick={() =>
                  props.deleteResource({
                    resourceId: props.notebook.id,
                    target: "resources.notebooks",
                  })
                }
              />
            </IconButton>

            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="settings"
            >
              <ExpandMoreIcon />
            </IconButton>
          </>
        }
        title={props.notebook.resource.name}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List component="nav" aria-label="contacts">
            {props.notebook.sections.map((section) => (
              <ListItem key={Math.random()} button href={section.url}>
                <ListItemIcon>
                  <NoteIcon />
                </ListItemIcon>
                <ListItemText primary={section.name} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}
