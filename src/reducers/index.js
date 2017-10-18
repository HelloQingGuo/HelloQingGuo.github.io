import { combineReducers } from 'redux';
import UIReducer from './reducer_ui';

const rootReducer = combineReducers({
  ui: UIReducer,
});

export default rootReducer;
