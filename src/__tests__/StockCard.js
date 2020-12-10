import React from 'react';
import renderer from 'react-test-renderer';
import StockCard from '../components/StockCard';

it('renders StockCard correctly', () => {
  const stock = {
    ticker: 'AAPL',
    price: '230.54',
    changesPercentage: '2.02',
    companyName: 'Apple Inc',
  };
  const tree = renderer.create(<StockCard stock={stock} />);
  expect(tree).toMatchSnapshot();
});
