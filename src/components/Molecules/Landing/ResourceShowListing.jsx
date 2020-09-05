import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import GitHubIcon from "@material-ui/icons/GitHub";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FolderList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem className="list-resource">
        <ListItemAvatar>
          <Avatar>
            <DashboardIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Boards"
          secondary="Import your weekly or project boards from Trello"
        />
      </ListItem>
      <ListItem className="list-resource">
        <ListItemAvatar>
          <Avatar>
            <FormatListBulletedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Tasks"
          secondary="All your daily tasks for project, you won't lose track"
        />
      </ListItem>

      <ListItem className="list-resource ">
        <ListItemAvatar>
          <Avatar>
            <GitHubIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Repos"
          secondary="Attach all your repos to your project"
        />
      </ListItem>

      <ListItem className="list-resource ">
        <ListItemAvatar>
          <Avatar>
            <LibraryBooksIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Notebooks"
          secondary="You can have all your notebooks from evernote or OneNote"
        />
      </ListItem>
      <ListItem className="list-resource ">
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Heros"
          secondary="You need inspiration, add all your dev heroes"
        />
      </ListItem>
      <ListItem className="list-resource">
        <ListItemAvatar>
          <Avatar>
            <DynamicFeedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Your feeds"
          secondary="Add your inspiration feeds and bring all the information"
        />
      </ListItem>
    </List>
  );
}
