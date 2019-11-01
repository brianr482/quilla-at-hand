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
import { Typography } from "@material-ui/core";
import styles from "./AdminDrawerItems.module.scss";

const useStyles = makeStyles(theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function DrawerItems() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.toolbar}>
        <Typography className={styles.title} component="h1" variant="h5">
          Quilla A La Mano
        </Typography>
      </div>
      <Divider />
      <List>
        <ListItem component={Link} to="/admin/dashboard" button key={1}>
          <ListItemIcon className={styles.text}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText className={styles.text} primary="Inicio" />
        </ListItem>

        <ListItem component={Link} to="/admin/dashboard/sitios" button key={2}>
          <ListItemIcon className={styles.text}>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText className={styles.text} primary="Sitios Turísticos" />
        </ListItem>
        <ListItem
          component={Link}
          to="/admin/dashboard/restaurantes"
          button
          key={3}
        >
          <ListItemIcon className={styles.text}>
            <RestaurantIcon />
          </ListItemIcon>
          <ListItemText className={styles.text} primary="Restaurantes" />
        </ListItem>
        <ListItem component={Link} to="/admin/dashboard/tips" button key={4}>
          <ListItemIcon className={styles.text}>
            <EmojiObjectsIcon />
          </ListItemIcon>
          <ListItemText className={styles.text} primary="Tips" />
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default DrawerItems;
