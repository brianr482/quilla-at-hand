import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import {
  IconButton, Avatar, Tooltip,
} from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import CropFreeOutlinedIcon from '@material-ui/icons/CropFreeOutlined';
import styles from './SitesTableRow.module.scss';
import QRDialog from '../QRDialog/QRDialog';


export default function SitesTableRow({ row }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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

    </>
  );
}

SitesTableRow.propTypes = {
  row: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
