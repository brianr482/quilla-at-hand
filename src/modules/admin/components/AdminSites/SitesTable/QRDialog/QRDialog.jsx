import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Box, CircularProgress } from '@material-ui/core';
import styles from './QRDialog.module.scss';


export default function QRDialog({ open, id, handleClose }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Código QR</DialogTitle>
        <DialogContent className={styles.content}>

          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${id}`}
            alt="QRCode"
            onLoad={() => setImgLoaded(true)}
            className={imgLoaded ? styles['QR-visible'] : styles['QR-hidden']}
          />
          { !imgLoaded && (
          <Box className={styles.progress}>
            <CircularProgress />
          </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} className={styles.button}>
            CERRAR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

QRDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
