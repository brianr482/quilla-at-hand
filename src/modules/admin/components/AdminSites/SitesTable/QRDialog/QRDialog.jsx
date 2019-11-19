import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import styles from './QRDialog.module.scss';


export default function ResponsiveDialog({ open, id, handleClose }) {
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
        <DialogContent>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${id}`} alt="QRCode" />
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