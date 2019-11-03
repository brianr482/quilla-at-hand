import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import styles from "./ModuleCard.module.scss";
import { Avatar } from "@material-ui/core";

export default function MediaCard({ title, icon }) {
  return (
    <Card className={styles.card}>
      <CardContent className={styles["card-content"]}>
        <Box className={styles["card-icon"]} gutterBottom>
          <Avatar className={styles.avatar}>{icon}</Avatar>
        </Box>
        <Typography align="center" variant="h6" component="h2">
          {title}
        </Typography>
        <Button size="small" className={styles.button}>
          Ir a {title}
        </Button>
      </CardContent>
    </Card>
  );
}
