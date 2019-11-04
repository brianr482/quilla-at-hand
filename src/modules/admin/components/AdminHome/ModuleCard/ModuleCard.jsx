import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import styles from './ModuleCard.module.scss';

export default function ModuleCard({ title, icon }) {
  return (
    <Card className={styles.card}>
      <CardContent className={styles['card-content']}>
        <Box className={styles['card-icon']} gutterBottom>
          <Avatar className={styles.avatar}>{icon}</Avatar>
        </Box>
        <Typography align="center" variant="h6" component="h2">
          {title}
        </Typography>
        <Button size="small" className={styles.button}>
          Ir a
          {title}
        </Button>
      </CardContent>
    </Card>
  );
}

ModuleCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
