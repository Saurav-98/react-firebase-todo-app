import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

import "./Todo.css";

const todo = (props) => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.item} secondary="Todo List Item 🚀" />
      </ListItem>
    </List>
  );
};

export default todo;
