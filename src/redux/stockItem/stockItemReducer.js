import {
  FETCH_STOCK_ITEM_SUCCESS,
  FETCH_STOCK_ITEM_REQUEST,
  FETCH_STOCK_ITEM_FAILURE,
} from './stockItemTypes';

const initialState = {
  loading: false,
  stockItem: {},
  error: '',
};

const stockItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STOCK_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        stockItem: action.payload,
        error: '',
      };
    case FETCH_STOCK_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        stockItem: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stockItemReducer;
