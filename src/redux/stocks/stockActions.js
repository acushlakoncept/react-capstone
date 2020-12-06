/* eslint-disable no-unused-vars */
import axios from 'axios';
import { FETCH_STOCK_REQUEST, FETCH_STOCK_SUCCESS, FETCH_STOCK_FAILURE } from './stockTypes';
import { STOCK_LIST_URL, stockQuoteUrl } from './stockUrls';

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

const fetchStockQuotes = ticker => function (dispatch) {
//   dispatch(fetchStocksRequest());
  axios
    .get(stockQuoteUrl(ticker), { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchStocksSuccess({ data }));
    })
    .catch(error => {
      dispatch(fetchStocksFailure(error.message));
    });
};

export const fetchStocks = () => function (dispatch) {
  dispatch(fetchStocksRequest());
  axios
    .get(STOCK_LIST_URL, { mode: 'cors' })
    .then(response => {
      const { data } = response;
      //   data.map(stock => fetchStockQuotes(stock.ticker));
      dispatch(fetchStocksSuccess(data));
    })
    .catch(error => {
      dispatch(fetchStocksFailure(error.message));
    });
};
