// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

// Components
import App from './App';

// Styles & Images
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
