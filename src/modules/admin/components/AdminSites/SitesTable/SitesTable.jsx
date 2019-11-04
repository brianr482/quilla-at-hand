import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { IconButton, Avatar, Tooltip } from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import CropFreeOutlinedIcon from '@material-ui/icons/CropFreeOutlined';
import styles from './SitesTable.module.scss';
import pictureExample from '../../../../../assets/saint_nicholas_wallpaper.jpg';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
});

const headers = ['Sitio', 'Ubicación', 'Edad'];

const rows = [
  {
    name: 'Iglesia San Nicolás',
    location: 'Av. El Progreso #35',
    age: 'Más de 300 años',
    publicCode: 'a4g2jfh',
  },
];

export default function SitesTable() {
  const classes = useStyles();

  return (
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Box className={styles['row-name']}>
                  <Avatar
                    className={styles.avatar}
                    alt="Foto Sitio"
                    src={pictureExample}
                  />
                  {row.name}
                </Box>
              </TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>
                <Box className={styles.actions}>
                  <Tooltip title="Código QR">
                    <IconButton className={styles['action-qr']}>
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
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
