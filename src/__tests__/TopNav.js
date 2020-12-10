import React from 'react';
import renderer from 'react-test-renderer';
import TopNav from '../components/TopNav';

it('renders TopNav correctly', () => {
  const tree = renderer.create(<TopNav handleOnSelect={jest.fn()} />);
  expect(tree).toMatchSnapshot();
});
