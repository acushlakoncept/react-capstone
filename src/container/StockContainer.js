import React from 'react';
import Stockcard from '../components/StockCard';

export default function Stockcontainer() {
  const apple = {
    symbol: 'AAPL',
    price: 250.03,
    percentage: 0.55,
    company: 'Apple Inc',
    image: 'https://financialmodelingprep.com/image-stock/AAPL.png',
  };

  const atlas = {
    symbol: 'AAWW',
    price: 56.370,
    percentage: 0.660,
    company: 'Atlas Air Worldwide Holdings, Inc.',
    image: 'https://financialmodelingprep.com/image-stock/AAPL.png',
  };

  const pan = {
    symbol: 'PAAS',
    price: 30.58,
    percentage: -0.110,
    company: 'Pan American Silver Corp.',
    image: 'https://financialmodelingprep.com/image-stock/AAPL.png',
  };

  return (
    <div className="mt-5 d-flex flex-wrap justify-content-center">
      <Stockcard stock={apple} />
      <Stockcard stock={atlas} />
      <Stockcard stock={pan} />
      <Stockcard stock={atlas} />
    </div>
  );
}
