import {
  Box,
} from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import styles from './sites.module.scss';
import SitesIndex from '../../components/sites-index/sites-index';
import SiteDetail from '../../components/site-detail/site-detail';
import SiteQrReader from '../../components/site-qr-reader/site-qr-reader';

function Sites({ match }) {
  return (
    <Box className={styles.wrapper}>
      <Switch>
        <Route exact path={`${match.url}`} component={SitesIndex} />
        <Route exact path={`${match.url}/search`} component={SiteQrReader} />
        <Route exact path={`${match.url}/:publicCode`} component={SiteDetail} />
      </Switch>
    </Box>
  );
}

Sites.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Sites;
