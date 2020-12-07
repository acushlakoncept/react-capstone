import axios from 'axios';
import { FETCH_STOCK_ITEM_FAILURE, FETCH_STOCK_ITEM_REQUEST, FETCH_STOCK_ITEM_SUCCESS } from './stockItemTypes';
import { stockProfileUrl } from '../stocks/stockUrls';

export const fetchStockItemRequest = () => ({
  type: FETCH_STOCK_ITEM_REQUEST,
});

export const fetchStockItemSuccess = stockItem => ({
  type: FETCH_STOCK_ITEM_SUCCESS,
  payload: stockItem,
});

export const fetchStockItemFailure = error => ({
  type: FETCH_STOCK_ITEM_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const fetchStockItem = symbol => function (dispatch) {
  dispatch(fetchStockItemRequest());
  axios
    .get(stockProfileUrl(symbol), { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchStockItemSuccess(data[0]));
    })
    .catch(error => {
      dispatch(fetchStockItemFailure(error.message));
    });
};
