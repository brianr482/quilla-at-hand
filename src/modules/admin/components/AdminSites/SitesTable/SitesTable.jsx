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
  CircularProgress,
} from '@material-ui/core';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../../../../../firebase';
import styles from './SitesTable.module.scss';
import SitesTableRow from './SitesTableRow/SitesTableRow';

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
  const [snapshot, loading, error] = useCollection(
    firebase.firestore().collection('places'),
  );


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
                <SitesTableRow key={row.id} row={row} />
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
