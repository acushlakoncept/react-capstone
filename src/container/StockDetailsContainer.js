import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import StockDetail from '../components/StockDetail';
import { fetchStockItem } from '../redux/index';

function StockDetailsContainer({ stockItemData }) {
  const { ticker } = useParams();

  useEffect(() => {
    fetchStockItem(ticker);
  }, [ticker]);

  console.log(ticker);
  const apple = {
    symbol: 'AAPL',
    price: 122.25,
    changes: -0.69,
    companyName: 'Apple Inc',
    website: 'https://www.apple.com/',
    industry: 'Consumer Electronics',
    description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, iPod touch, and other Apple-branded and third-party accessories.',
    image: 'https://financialmodelingprep.com/image-stock/AAPL.png',
  };

  return stockItemData.loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="white" />
    </h2>
  ) : (
    <StockDetail stockItem={stockItemData.stockItem} />
  );
}

const mapStateToProps = state => ({
  stockItemData: state.stockItem,
});

const mapDispatchToProps = dispatch => ({
  fetchStockItem: ticker => dispatch(fetchStockItem(ticker)),
});

StockDetailsContainer.propTypes = {
  stockItemData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    stockItem: PropTypes.shape({}).isRequired,
  }),
};

StockDetailsContainer.defaultProps = {
  stockItemData: {
    loading: false,
    stockItem: {},
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(StockDetailsContainer);
