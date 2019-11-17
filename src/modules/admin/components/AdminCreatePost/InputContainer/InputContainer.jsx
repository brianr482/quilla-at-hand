import React from 'react';
import {
  Box, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './InputContainer.module.scss';

const InputContainer = ({
  children, subtitle, select, file, className,
}) => (
  <Box className={className}>
    <Typography className={styles.subtitle} component="h1" variant="h6">
      {subtitle}
    </Typography>
    <Box
      component={file ? 'label' : 'div'}
      className={
        (() => {
          if (select) {
            return styles.types;
          } if (file) {
            return styles.files;
          }
          return styles['input-wrapper'];
        })()
    }
    >
      <>
        {children}
      </>
    </Box>
  </Box>
);

InputContainer.propTypes = {
  subtitle: PropTypes.string.isRequired,
  className: PropTypes.string,
  select: PropTypes.bool,
  file: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

InputContainer.defaultProps = {
  select: false,
  file: false,
  className: undefined,
};

export default InputContainer;
