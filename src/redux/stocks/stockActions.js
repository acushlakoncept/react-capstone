/* eslint-disable no-unused-vars */
import axios from 'axios';
import dotenv from 'dotenv';
import { FETCH_STOCK_REQUEST, FETCH_STOCK_SUCCESS, FETCH_STOCK_FAILURE } from './stockTypes';

dotenv.config();

const STOCK_LIMIT = 10;
const API_KEY = process.env.REACT_APP_API_KEY;
const API_EXCHANGE = 'NASDAQ';
const QUERY_STRING = 'AA';
const STOCK_SYMBOL = 'AAPL';
const STOCK_QUERY_URL = `https://financialmodelingprep.com/api/v3/search-ticker?query=${QUERY_STRING}&limit=${STOCK_LIMIT}&exchange=${API_EXCHANGE}&apikey=${API_KEY}`;
const STOCK_LIST_URL = `https://financialmodelingprep.com/api/v3/stock/list?apikey=${API_KEY}`;
const STOCK_QUOTE_URL = `https://financialmodelingprep.com/api/v3/quote/${STOCK_SYMBOL}?apikey=${API_KEY}`;
const STOCK_PROFILE_URL = `https://financialmodelingprep.com/api/v3/profile/${STOCK_SYMBOL}?apikey=${API_KEY}`;

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
    .get(API_URL)
}