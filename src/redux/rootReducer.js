import { combineReducers } from 'redux';
import stockReducer from './stocks/stockReducer';

const rootReducer = combineReducers({
  stocks: stockReducer,
});

export default rootReducer;
