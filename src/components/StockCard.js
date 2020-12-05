import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BsGraphDown, BsGraphUp, BsFillForwardFill } from 'react-icons/bs';
import dotenv from 'dotenv';

dotenv.config();

function StockCard({ stock }) {
  return (
    <Card style={{ width: '15rem' }} className="m-2 bg-dark">
      <Card.Img className="blendMul" variant="top" src={`https://financialmodelingprep.com/image-stock/${stock.symbol}.png`} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-muted font-weight-bold">{ stock.symbol }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{ stock.company }</Card.Subtitle>
        <Card.Text className={stock.percentage > 0 ? 'text-success' : 'text-danger'}>
          { ` ${stock.price} ${stock.currency || 'USD'}` }
          {' '}
          <BsFillForwardFill />
          <em>{ ` ${stock.percentage}% ` }</em>
          {stock.percentage > 0 ? <BsGraphUp /> : <BsGraphDown />}
        </Card.Text>
        <Button variant="outline-success mt-auto">Details</Button>
        {/* <p>
          API-KEY:
          {process.env.REACT_APP_API_KEY}
        </p> */}
      </Card.Body>
    </Card>
  );
}
// convert timestamp to date time (new Date(timestamp * 1000)).toLocaleString()

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
