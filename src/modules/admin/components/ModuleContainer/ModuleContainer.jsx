import React from "react";
import { Typography, Box, Divider, IconButton } from "@material-ui/core";
import styles from "./ModuleContainer.module.scss";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import AddIcon from "@material-ui/icons/Add";

const icons = {
  Inicio: <HomeOutlinedIcon fontSize="large" />,
  "Sitios Turísticos": <RoomOutlinedIcon fontSize="large" />,
  Restaurantes: <FastfoodOutlinedIcon fontSize="large" />,
  Tips: <EmojiObjectsOutlinedIcon fontSize="large" />
};

const ModuleContainer = ({ title, children, add }) => (
  <Box className={styles.wrapper}>
    <Box className={styles.section}>
      <Typography className={styles.title} variant="h1">
        {title}
      </Typography>
      {add && (
        <IconButton disableRipple className={styles.add}>
          <AddIcon fontSize="inherit" />
        </IconButton>
      )}
    </Box>
    <Box className={styles.content}>{children}</Box>
  </Box>
);

export default ModuleContainer;
