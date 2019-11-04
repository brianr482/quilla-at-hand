import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import AdminRestaurants from '../../../components/AdminRestaurants/AdminRestaurants';
import AdminSites from '../../../components/AdminSites/AdminSites';
import AdminTips from '../../../components/AdminTips/AdminTips';
import AdminHome from '../../../components/AdminHome/AdminHome';
import AdminDrawer from '../../../components/AdminDrawer/AdminDrawer';
import AdminAppBar from '../../../components/AdminAppBar/AdminAppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}));

function AdminDashboard(props) {
  const { match } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AdminAppBar
        anchorEl={anchorEl}
        handleMenu={handleMenu}
        handleClose={handleClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <AdminDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path={`${match.url}`} component={AdminHome} />
          <Route exact path={`${match.url}/sitios`} component={AdminSites} />
          <Route
            exact
            path={`${match.url}/restaurantes`}
            component={AdminRestaurants}
          />
          <Route exact path={`${match.url}/tips`} component={AdminTips} />
        </Switch>
      </main>
    </div>
  );
}

AdminDashboard.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired

  ,
};

export default AdminDashboard;
