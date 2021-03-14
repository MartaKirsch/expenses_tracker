import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'views/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'reducers/rootReducer.js';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
