import React from 'react';
// import './home.scss';
import { Route, Switch } from 'react-router-dom';
import { Welcome } from '../../modules/static';
import { Sites } from '../../modules/sites';
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/sites" component={Sites} />
      </Switch>
    </div>
  );
}

export default Home;
