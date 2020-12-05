import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function StockCard({ stock }) {
  return (
    <Card style={{ width: '14rem' }} className="m-2">
      {/* <Card.Img variant="top" src="https://financialmodelingprep.com/image-stock/AAPL.png" /> */}
      <Card.Body>
        <Card.Title>{ stock.symbol }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{ stock.company }</Card.Subtitle>
        <Card.Text className="text-success">{ `${stock.price} ${stock.currency || 'USD'}` }</Card.Text>
        <Card.Text className="text-success">{ `${stock.percentage}%` }</Card.Text>
        <Button variant="outline-success">Details</Button>
      </Card.Body>
    </Card>
  );
}

StockCard.propTypes = {
  stock: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.number,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default StockCard;
