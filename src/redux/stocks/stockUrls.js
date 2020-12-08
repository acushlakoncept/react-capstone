import dotenv from 'dotenv';

dotenv.config();
const API_KEY = process.env.REACT_APP_API_KEY;

export const STOCK_LIST_URL = `https://financialmodelingprep.com/api/v3/actives?apikey=${API_KEY}`;
export const STOCK_GAINERS = `https://financialmodelingprep.com/api/v3/gainers?apikey=${API_KEY}`;
export const STOCK_LOSERS = `https://financialmodelingprep.com/api/v3/losers?apikey=${API_KEY}`;
export const STOCK_NEWS = `https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey=${API_KEY}`;

export const stockQuoteUrl = stockSymbol => (
  `https://financialmodelingprep.com/api/v3/quote/${stockSymbol}?apikey=${API_KEY}`
);

export const stockProfileUrl = stockSymbol => (
  `https://financialmodelingprep.com/api/v3/profile/${stockSymbol}?apikey=${API_KEY}`
);

export const stockQueryUrl = queryString => (
  `https://financialmodelingprep.com/api/v3/search-ticker?query=${queryString}&limit=12&apikey=${API_KEY}`
);
