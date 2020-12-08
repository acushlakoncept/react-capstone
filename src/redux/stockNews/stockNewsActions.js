import axios from 'axios';
import {
  FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS,
} from './stockNewsTypes';
import { STOCK_NEWS } from '../stocks/stockUrls';

export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST,
});

export const fetchNewsSuccess = news => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news,
});

export const fetchNewsFailure = error => ({
  type: FETCH_NEWS_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const fetchNews = () => function (dispatch) {
  dispatch(fetchNewsRequest());
  axios
    .get(STOCK_NEWS, { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchNewsSuccess(data));
    })
    .catch(error => {
      dispatch(fetchNewsFailure(error.message));
    });
};
