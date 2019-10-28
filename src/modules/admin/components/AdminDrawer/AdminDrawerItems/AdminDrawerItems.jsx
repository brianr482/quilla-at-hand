import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar
}));

function DrawerItems() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem component={Link} to="/admin/dashboard" button key={1}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>

        <ListItem component={Link} to="/admin/dashboard/sitios" button key={2}>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Sitios Turísticos" />
        </ListItem>
        <ListItem
          component={Link}
          to="/admin/dashboard/restaurantes"
          button
          key={3}
        >
          <ListItemIcon>
            <RestaurantIcon />
          </ListItemIcon>
          <ListItemText primary="Restaurantes" />
        </ListItem>
        <ListItem component={Link} to="/admin/dashboard/tips" button key={4}>
          <ListItemIcon>
            <EmojiObjectsIcon />
          </ListItemIcon>
          <ListItemText primary="Tips" />
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default DrawerItems;
