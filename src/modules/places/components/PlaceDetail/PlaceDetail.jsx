import {
  Box,
  Card,
  Typography,
  CardContent,
  IconButton,
  CircularProgress,
  Button,
} from '@material-ui/core';
import React from 'react';
import Img from 'react-image';
import { Link } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import ReactRouterPropTypes from 'react-router-prop-types';
import firebase from '../../../../firebase';
import styles from './PlaceDetail.module.scss';

function PlaceDetail({ match }) {
  const [place, loading, error] = useDocumentData(
    firebase.firestore().doc(`places/${match.params.id}`),
  );
  return (
    <Box className={styles.wrapper}>
      <Card className={styles.card}>
        <Box>
          <CardContent className={styles['card-content']}>
            {loading
            && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={1}
              >
                <CircularProgress />
              </Box>
            )}
            {place
            && (
            <div>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <Box mr={0.5}>
                  <IconButton
                    aria-label="delete"
                    component={Link}
                    to="/places"
                  >
                    <KeyboardArrowLeftIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Typography variant="h5">
                  {place.name}
                </Typography>
              </Box>
              <Box mb={0.75}>
                <Typography variant="subtitle2" color="textSecondary">
                  {place.age && place.age}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                align="justify"
                color="textSecondary"
                paragraph
              >
                <b>Descripción</b>
                :&nbsp;
                {place.description}
              </Typography>
              <Typography
                variant="body2"
                align="justify"
                color="textSecondary"
                paragraph
              >
                <b>Dirección</b>
                :&nbsp;
                {place.address}
              </Typography>
            </div>
            )}
            {(error || (!loading && !place))
            && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height={1}
              >
                <SentimentVeryDissatisfiedIcon />
                No se encontró ningun resultado.
                <Box mt={1}>
                  <Button
                    aria-label="back"
                    component={Link}
                    to="/places"
                  >
                    Regresar
                  </Button>
                </Box>
              </Box>
            )}
          </CardContent>
        </Box>
        {place && place.imgUrl
        && (
        <Img
          className={styles['cover-image']}
          src={place.imgUrl}
          loader={(
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height={1}
              mr={2}
            >
              <CircularProgress />
            </Box>
            )}
        />
        )}
      </Card>
    </Box>
  );
}

PlaceDetail.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default PlaceDetail;
