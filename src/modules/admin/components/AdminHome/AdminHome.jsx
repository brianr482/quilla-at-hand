import React from "react";
import { Typography, Box, Divider } from "@material-ui/core";
import ModuleCard from "./ModuleCard/ModuleCard";
import styles from "./AdminHome.module.scss";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import ModuleContainer from "../ModuleContainer/ModuleContainer";

const AdminHome = () => (
  <ModuleContainer title="Inicio">
    <ModuleCard
        title="Sitios Turisticos"
        icon={<RoomOutlinedIcon className={styles.icon} />}
      />
      <ModuleCard
        title="Restaurantes"
        icon={<FastfoodOutlinedIcon className={styles.icon} />}
      />
      <ModuleCard
        title="Tips"
        icon={<EmojiObjectsOutlinedIcon className={styles.icon} />}
      />
  </ModuleContainer>
);

export default AdminHome;
