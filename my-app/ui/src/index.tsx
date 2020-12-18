import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { loadEnvironment } from './features/environment/Environment';

const initApp = async () => {
  const environment = await loadEnvironment();

  //cors needs to be enabled in server side
  axios.defaults.baseURL = environment.API_BASE_URL || 'http://localhost:3001';
  const Pragma = 'Pragma';
  axios.defaults.headers.common[Pragma] = 'no-cache';
  const ContentType = 'Content-Type';
  axios.defaults.headers.common[ContentType] = 'application/json';
  axios.defaults.timeout = 25000;

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

initApp().catch(() => {
  ReactDOM.render(
      (
          <div style={{marginTop: '40px'}}>Failed to load configuration! Please try again later.</div>
      ),
      document.getElementById('root') as HTMLElement
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
