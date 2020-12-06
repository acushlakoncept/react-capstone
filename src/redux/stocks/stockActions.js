import axios from 'axios';
import { FETCH_STOCK_REQUEST, FETCH_STOCK_SUCCESS, FETCH_STOCK_FAILURE } from './stockTypes';

export const fetchStocksRequest = () => ({
  type: FETCH_STOCK_REQUEST,
});

export const fetchStocksSuccess = stocks => ({
  type: FETCH_STOCK_SUCCESS,
  payload: stocks,
});

export const fetchStocksFailure = error => ({
  type: FETCH_STOCK_FAILURE,
  payload: error,
});

export const fetchStocks = () => function (dispatch) {
  dispatch(fetchStocksRequest());
  axios
    .get(API_URL);
};
