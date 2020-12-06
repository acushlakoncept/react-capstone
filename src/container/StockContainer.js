/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Stockcard from '../components/StockCard';
import { fetchStocks } from '../redux/stocks/stockActions';

function Stockcontainer({ stockData, fetchStocks }) {
  useEffect(() => {
    fetchStocks();
  }, []);

  return stockData.loading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="mt-5 d-flex flex-wrap justify-content-center">
      { stockData.stocks.map(stockInfo => (
        <Stockcard key={stockInfo.ticker} stock={stockInfo} />
      )) }
    </div>
  );
}

const mapStateToProps = state => ({
  stockData: state.stocks,
});

const mapDispatchToProps = dispatch => ({
  fetchStocks: () => dispatch(fetchStocks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stockcontainer);
