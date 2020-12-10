import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import Stockcard from '../components/StockCard';
import { fetchStocks } from '../redux/stocks/stockActions';

function StockContainer({ stockData, fetchStocks }) {
  const url = useSelector(state => state.urlType);
  useEffect(() => {
    fetchStocks(url);
  }, [url]);

  // eslint-disable-next-line no-nested-ternary
  return stockData.loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="green" />
    </h2>
  ) : stockData.error ? (
    <h2 className="text-center pt-5">Kindly check back, Server currently not responding</h2>
  ) : (
    <div className="mt-5 d-flex flex-wrap justify-content-center">
      { stockData.stocks.map(stockInfo => (
        <Stockcard
          key={stockInfo.ticker}
          stock={stockInfo}
        />
      )) }
    </div>
  );
}

const mapStateToProps = state => ({
  stockData: state.stocks,
});

const mapDispatchToProps = dispatch => ({
  fetchStocks: url => dispatch(fetchStocks(url)),
});

StockContainer.propTypes = {
  stockData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    stocks: PropTypes.instanceOf(Array).isRequired,
    error: PropTypes.string,
  }),
  fetchStocks: PropTypes.func.isRequired,
};

StockContainer.defaultProps = {
  stockData: {
    stocks: [],
    loading: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(StockContainer);
