import { combineReducers } from 'redux';

import workPlaceReducer from './workPlaceReducer';

const rootReducer = combineReducers({
  workPlaceReducer,
});

export default rootReducer;