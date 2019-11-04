import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/styles';
import Home from './pages/home/home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StylesProvider injectFirst>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </StylesProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
