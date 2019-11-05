import React from 'react';
import {
  Typography, Box, IconButton, Tooltip,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import styles from './ModuleContainer.module.scss';


const ModuleContainer = ({
  title, children, add, edit, className,
}) => (
  <Box className={`${styles.wrapper} ${className}`}>
    <Box className={styles.section}>
      <Typography className={styles.title} variant="h1">
        {title}
      </Typography>
      {(add || edit) && (
        <Tooltip title="Crear">
          <Link to="/admin/dashboard/crear">
            <IconButton disableRipple className={styles.add}>
              {add ? <AddIcon fontSize="inherit" /> : <SaveIcon fontSize="inherit" />}
            </IconButton>
          </Link>

        </Tooltip>
      )}
    </Box>
    <Box className={styles.content}>{children}</Box>
  </Box>
);

ModuleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  add: PropTypes.bool,
  edit: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ModuleContainer.defaultProps = {
  add: false,
  edit: false,
  className: undefined,
};

export default ModuleContainer;
