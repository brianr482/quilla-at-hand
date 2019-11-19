import React from 'react';
import {
  Typography, Box, IconButton, Tooltip,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import styles from './ModuleContainer.module.scss';


const ModuleContainer = ({
  title, children, add, edit, backButton, className,
}) => (
  <Box className={`${styles.wrapper} ${className}`}>
    <Box className={styles.section}>

      <Box className={styles['title-box']}>
        {backButton && (
        <IconButton
          aria-label="delete"
          component={Link}
          to="/admin/dashboard/sitios"
        >
          <KeyboardArrowLeftIcon fontSize="small" />
        </IconButton>
        )}
        <Typography className={styles.title} variant="h1">
          {title}
        </Typography>

      </Box>
      {(add || edit) && (
        <Tooltip title="Crear">
          <Link to="/admin/dashboard/crear">
            {add ? (
              <IconButton disableRipple className={styles.add}>
                <AddIcon fontSize="inherit" />
              </IconButton>
            ) : edit()}
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
  backButton: PropTypes.bool,
  edit: PropTypes.elementType,
  children: PropTypes.node.isRequired,
};

ModuleContainer.defaultProps = {
  add: false,
  edit: undefined,
  backButton: false,
  className: undefined,
};

export default ModuleContainer;
