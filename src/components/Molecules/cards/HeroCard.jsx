import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";

import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinkIcon from "@material-ui/icons/Link";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginBottom: 100,
  },
  media: {
    // height: 0,
    // paddingTop: "56.25%", // 16:9
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
    backgroundColor: red[500],
  },
}));

export default function HeroCard(props) {
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
            {props.hero.name.charAt(0)}
          </Avatar>
        }
        action={
          <>
            {props.deleteHeroe ? (
              <IconButton aria-label="Delete Heroe">
                <DeleteIcon
                  color="error"
                  onClick={() =>
                    props.deleteHeroe({ resourceId: props.hero.id })
                  }
                />
              </IconButton>
            ) : (
              ""
            )}
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
        title={props.hero.name}
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List component="nav" aria-label="contacts">
            {props.hero.links.map((link, linkIndex) => (
              <ListItem key={linkIndex} button href={link.url}>
                <ListItemIcon href={link.url}>
                  <LinkIcon href={link.url} />
                </ListItemIcon>
                <ListItemText href={link.url} primary={link.name} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}
