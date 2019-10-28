import React from 'react';
// import './home.scss';
import { Route, Switch } from 'react-router-dom';
import { Welcome } from '../../modules/static';
import { Sites } from '../../modules/sites';
import { Admin } from '../../modules/admin'
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/sites" component={Sites} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default Home;
