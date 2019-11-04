import React from 'react';
import {
  Typography, Box, IconButton, Tooltip,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import AddIcon from '@material-ui/icons/Add';
import styles from './ModuleContainer.module.scss';


const ModuleContainer = ({ title, children, add }) => (
  <Box className={styles.wrapper}>
    <Box className={styles.section}>
      <Typography className={styles.title} variant="h1">
        {title}
      </Typography>
      {add && (
        <Tooltip title="Crear">
          <IconButton disableRipple className={styles.add}>
            <AddIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      )}
    </Box>
    <Box className={styles.content}>{children}</Box>
  </Box>
);

ModuleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  add: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ModuleContainer.defaultProps = {
  add: false,
};

export default ModuleContainer;
