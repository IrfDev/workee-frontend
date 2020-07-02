import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 100,
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
            D
          </Avatar>
        }
        action={
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
        }
        title={props.hero.name}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List component="nav" aria-label="contacts">
            {props.hero.links.map((link) => (
              <ListItem key={Math.random()} button href={link.url}>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}
