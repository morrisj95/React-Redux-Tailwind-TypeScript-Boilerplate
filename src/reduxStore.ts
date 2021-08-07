import { compose, createStore /* applyMiddleware */ } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import rootReducer, { DEFAULT_STATE } from './reducers/root';

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  rootReducer,
  DEFAULT_STATE,
  composeEnhancers()
  // applyMiddleware(...middleware)
);
