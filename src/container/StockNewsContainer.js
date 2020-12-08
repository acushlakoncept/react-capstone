/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import StockNews from '../components/StockNews';
import { fetchNews } from '../redux';

function StockNewsContainer({ newsData, fetchNews }) {
  useEffect(() => {
    fetchNews();
  }, []);

  return newsData.loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="green" />
    </h2>
  ) : newsData.error || Object.keys(newsData.news) < 2 ? (
    <h2 className="text-center pt-5">Kindly check back, Server currently not responding</h2>
  ) : (
    <div className="mt-5 d-flex flex-wrap justify-content-center">
      {newsData.news.map(news => (
        <StockNews
          key={`${news.symbol}-${Math.floor(Math.random() * 11)}`}
          news={news}
        />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  newsData: state.stockNews,
});

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockNewsContainer);
