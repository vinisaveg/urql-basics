import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'urql';

import { client } from './api/client';

import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
