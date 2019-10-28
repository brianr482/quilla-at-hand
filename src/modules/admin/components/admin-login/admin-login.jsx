import React from "react";
import { Box, Container } from "@material-ui/core";
import styles from "./admin-login.module.scss";
import LoginForm from "./form/form";

const AdminLogin = () => (
  <Box className={styles["wrapper-filter"]}>
    <Box className={styles.wrapper}>
      <Container className={styles.login} maxWidth="sm">
        <LoginForm />
      </Container>
    </Box>
  </Box>
);

export default AdminLogin