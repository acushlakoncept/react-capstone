import React from 'react';
import StockDetail from '../components/StockDetail';

export default function StockDetailsContainer() {
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

  return (
    <StockDetail stockItem={apple} />
  );
}
