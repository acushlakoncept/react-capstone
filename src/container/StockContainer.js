import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import Stockcard from '../components/StockCard';
import { fetchStocks } from '../redux/stocks/stockActions';

function StockContainer({ stockData, fetchStocks }) {
  useEffect(() => {
    fetchStocks();
  }, []);

  return stockData.loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="white" />
    </h2>
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
  fetchStocks: () => dispatch(fetchStocks()),
});

StockContainer.propTypes = {
  stockData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    stocks: PropTypes.instanceOf(Array).isRequired,
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
