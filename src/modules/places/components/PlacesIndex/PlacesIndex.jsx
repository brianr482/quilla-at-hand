import React from 'react';
import {
  Box,
  Card,
  Typography,
  CardContent,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  IconButton,
  Fab,
  Tooltip,
  CircularProgress,
  TablePagination,
} from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../../../../firebase';
import styles from './PlacesIndex.module.scss';

function PlacesIndex({ history, location }) {
  const [snapshot, loading, error] = useCollection(
    firebase.firestore().collection('places'),
  );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box className={styles.wrapper}>
      <Card className={styles.card}>
        <CardContent>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Box mr={0.5}>
              <IconButton
                aria-label="delete"
                component={Link}
                to="/"
              >
                <KeyboardArrowLeftIcon fontSize="small" />
              </IconButton>
            </Box>
            <Typography variant="h5">
              Lista de lugares
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {loading
            && (
            <Box mt={1}>
              <CircularProgress />
            </Box>
            )}
          </Box>
          {!loading && !error && snapshot
          && (
          <div style={{ overflow: 'auto' }}>
            <Table className={styles['main-table']} size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Ubicación</TableCell>
                  <TableCell>Edad</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {snapshot.docs
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((doc) => (
                    <TableRow
                      key={doc.id}
                      onClick={
                        () => history.push(
                          `${location.pathname}/${doc.id}`,
                        )
                      }
                      hover
                    >
                      <TableCell
                        component="th"
                        scope="row"
                      >
                        {doc.data().name}
                      </TableCell>
                      <TableCell>{doc.data().address}</TableCell>
                      <TableCell>{doc.data().age}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={snapshot.size}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                'aria-label': 'Página anterior',
              }}
              nextIconButtonProps={{
                'aria-label': 'Siguiente página',
              }}
              labelRowsPerPage="Filas por página"
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </div>
          )}
        </CardContent>
      </Card>
      <Tooltip title="Escanear QR" aria-label="go to qr reader">
        <Fab
          color="secondary"
          aria-label="camera"
          className={styles['camera-action-button']}
          component={Link}
          to={`${location.pathname}/search`}
        >
          <CameraAltIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
}

PlacesIndex.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(PlacesIndex);
