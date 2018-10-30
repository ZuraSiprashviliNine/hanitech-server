
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import {
  composeWithDevTools
} from 'redux-devtools-extension';

import Promise from 'redux-promise-middleware';
import Thunk from 'redux-thunk';

import User from './reducers/user';

export default () => createStore(
  combineReducers({
    User: User,
  }),
  {},
  composeWithDevTools(
    applyMiddleware(
      Thunk,
      Promise()
    )
  )
);
