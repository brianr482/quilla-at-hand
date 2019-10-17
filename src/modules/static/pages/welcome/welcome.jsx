import {
  Box,
  Fab,
  Typography,
} from '@material-ui/core';
import {
  Favorite as FavoriteIcon,
  Search as SearchIcon,
} from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './welcome.module.scss';

function Welcome() {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles['home-section']}>
        <Typography variant="h1">
          Quilla A La Mano
        </Typography>
        <Fab
          variant="extended"
          aria-label="delete"
          component={Link}
          to="/sites"
        >
          Buscar sitios &nbsp;
          <SearchIcon />
        </Fab>
      </Box>
      <Box className={styles.footer}>
        <Typography variant="body1">
          made with&thinsp;
          <FavoriteIcon />
          &thinsp;by&nbsp;
          <a
            href="https://github.com/brianr482"
            target="_blank"
            rel="noopener noreferrer"
          >
            brians
          </a>
          &nbsp;&&nbsp;
          <a
            href="https://github.com/juanse11"
            target="_blank"
            rel="noopener noreferrer"
          >
            juanse
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default Welcome;
