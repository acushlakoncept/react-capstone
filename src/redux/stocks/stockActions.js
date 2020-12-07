import axios from 'axios';
import { FETCH_STOCK_REQUEST, FETCH_STOCK_SUCCESS, FETCH_STOCK_FAILURE } from './stockTypes';
import { STOCK_LIST_URL } from './stockUrls';

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

// eslint-disable-next-line func-names
export const fetchStocks = () => function (dispatch) {
  dispatch(fetchStocksRequest());
  axios
    .get(STOCK_LIST_URL, { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchStocksSuccess(data));
    })
    .catch(error => {
      dispatch(fetchStocksFailure(error.message));
    });
};
