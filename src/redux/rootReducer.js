import { combineReducers } from 'redux';
import stockItemReducer from './stockItem/stockItemReducer';
import stockReducer from './stocks/stockReducer';

const rootReducer = combineReducers({
  stocks: stockReducer,
  stockItem: stockItemReducer,
});

export default rootReducer;
