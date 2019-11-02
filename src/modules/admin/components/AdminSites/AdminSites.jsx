import React from "react";
import { Typography, Box, Divider } from "@material-ui/core";
import styles from "./AdminSites.module.scss";
import ModuleContainer from "../ModuleContainer/ModuleContainer";
import SitesTable from "./SitesTable/SitesTable";

const AdminSites = () => (
  <ModuleContainer title="Sitios Turísticos">
    <Box className={styles.wrapper}>
      <SitesTable />
    </Box>
  </ModuleContainer>
);

export default AdminSites;
