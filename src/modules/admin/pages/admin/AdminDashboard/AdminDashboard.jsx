import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";

import AdminRestaurants from "../../../components/AdminRestaurants/AdminRestaurants";
import AdminSites from "../../../components/AdminSites/AdminSites";
import AdminTips from "../../../components/AdminTips/AdminTips";
import AdminHome from "../../../components/AdminHome/AdminHome";
import AdminDrawer from "../../../components/AdminDrawer/AdminDrawer";
import AdminAppBar from "../../../components/AdminAppBar/AdminAppBar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100%"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1
  }
}));

function AdminDashboard(props) {
  const { match } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AdminAppBar />
      <AdminDrawer />
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

export default AdminDashboard;
