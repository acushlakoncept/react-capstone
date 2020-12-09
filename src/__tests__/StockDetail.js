import React from 'react';
import renderer from 'react-test-renderer';
import StockDetail from '../components/StockDetail';

it('renders StockDetail correctly', () => {
  const stock = {
    symbol: 'AAPL',
    price: 230.54,
    changes: 2.02,
    companyName: 'Apple Inc',
    website: 'https://apple.com',
    industry: 'tech',
    description: 'Apple is a giant tech company',
    image: 'http://imagesite.com/image.png',
  };
  const tree = renderer.create(<StockDetail stockItem={stock} />);
  expect(tree).toMatchSnapshot();
});
