import {
  FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE,
} from './stockNewsTypes';

const initialState = {
  loading: false,
  news: [],
  error: '',
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload,
        error: '',
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        news: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stockReducer;
