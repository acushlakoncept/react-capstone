import {
  FETCH_STOCK_REQUEST, FETCH_STOCK_SUCCESS, FETCH_STOCK_FAILURE,
} from './stockTypes';

const initialState = {
  loading: false,
  stocks: [],
  error: '',
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STOCK_SUCCESS:
      return {
        ...state,
        loading: false,
        stocks: action.payload,
        error: '',
      };
    case FETCH_STOCK_FAILURE:
      return {
        ...state,
        loading: false,
        stocks: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stockReducer;
