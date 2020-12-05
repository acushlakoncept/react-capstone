import React from 'react';
import Stockcard from '../components/StockCard';

export default function Stockcontainer() {
  return (
    <div className="mt-5 d-flex flex-wrap justify-content-center">
      <Stockcard />
      <Stockcard />
      <Stockcard />
      <Stockcard />
    </div>
  );
}
