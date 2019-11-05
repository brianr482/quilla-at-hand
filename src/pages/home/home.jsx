import React from 'react';
// import './home.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Welcome } from '../../modules/static';
import { Places } from '../../modules/places';
import { Admin } from '../../modules/admin';
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/places" component={Places} />
        <Route path="/admin" component={Admin} />
        <Route path="**">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
