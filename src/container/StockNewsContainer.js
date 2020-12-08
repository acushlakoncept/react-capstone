/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import StockNews from '../components/StockNews';
import { fetchNews } from '../redux';

function StockNewsContainer({ newsData, fetchNews }) {
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      { console.log(newsData) }
      <StockNews />
      <StockNews />
    </>
  );
}

const mapStateToProps = state => ({
  newsData: state.stockNews,
});

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockNewsContainer);
