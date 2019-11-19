import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import {
  IconButton, Avatar, Tooltip, CircularProgress, Modal, Fade, Backdrop,
} from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import CropFreeOutlinedIcon from '@material-ui/icons/CropFreeOutlined';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../../../../../firebase';
import styles from './SitesTable.module.scss';
import QRDialog from './QRDialog/QRDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const headers = ['Sitio', 'Ubicación', 'Edad'];

export default function SitesTable() {
  const [open, setOpen] = React.useState(false);

  const [snapshot, loading, error] = useCollection(
    firebase.firestore().collection('places'),
  );
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <>
      {!loading && !error && snapshot ? (
        <Paper className={classes.root}>
          <Table className={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header}>{header}</TableCell>
                ))}
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {snapshot.docs.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <Box className={styles['row-name']}>
                      <Avatar
                        className={styles.avatar}
                        alt="Foto Sitio"
                        src={row.data().imgUrl}
                      />
                      {row.data().name}
                    </Box>
                  </TableCell>
                  <TableCell>{row.data().address}</TableCell>
                  <TableCell>{row.data().age}</TableCell>
                  <TableCell>
                    <Box className={styles.actions}>
                      <Tooltip title="Código QR">
                        <IconButton className={styles['action-qr']} onClick={handleOpen}>
                          <CropFreeOutlinedIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Editar">
                        <IconButton className={styles['action-edit']}>
                          <CreateOutlinedIcon fontSize="inherit" />
                        </IconButton>

                      </Tooltip>
                      <Tooltip title="Eliminar">
                        <IconButton className={styles['action-delete']}>
                          <DeleteForeverOutlinedIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                      <QRDialog
                        id={row.id}
                        open={open}
                        handleClickOpen={handleOpen}
                        handleClose={handleClose}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </Paper>
      ) : (
        <Box className={styles.progress}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
