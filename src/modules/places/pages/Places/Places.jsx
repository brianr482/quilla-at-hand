import {
  Box,
} from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import styles from './Places.module.scss';
import PlacesIndex from '../../components/PlacesIndex/PlacesIndex';
import PlaceDetail from '../../components/PlaceDetail/PlaceDetail';
import PlaceQrReader from '../../components/PlaceQrReader/PlaceQrReader';

function Places({ match }) {
  return (
    <Box className={styles.wrapper}>
      <Switch>
        <Route exact path={`${match.url}`} component={PlacesIndex} />
        <Route exact path={`${match.url}/search`} component={PlaceQrReader} />
        <Route exact path={`${match.url}/:publicCode`} component={PlaceDetail} />
      </Switch>
    </Box>
  );
}

Places.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Places;
