import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BsGraphDown, BsGraphUp, BsFillForwardFill } from 'react-icons/bs';
import notFound from '../imgs/not_found.jpg';

function StockCard({ stock, handleDetailClick }) {
  const justPercent = stock.changesPercentage.match(/(-|\+)|(\.)|\d+/g).join('');
  const percentage = parseFloat(justPercent);
  return (
    <Card style={{ width: '16rem' }} className="m-2 bg-dark">
      <Card.Img
        className="blendMul"
        variant="top"
        src={`https://financialmodelingprep.com/image-stock/${stock.ticker}.png`}
        onError={e => {
          e.target.src = notFound;
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-light font-weight-bold">{ stock.ticker }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{ stock.companyName }</Card.Subtitle>
        <Card.Text className={`d-flex justify-content-between ${percentage > 0 ? 'text-success' : 'text-danger'}`}>
          { ` ${stock.price} ${stock.currency || 'USD'}` }
          {' '}
          <BsFillForwardFill />
          <em>{ `${percentage}%` }</em>
          {percentage > 0 ? <BsGraphUp /> : <BsGraphDown />}
        </Card.Text>
        <div className="mt-auto">
          <Button onClick={handleDetailClick} variant="outline-success w-100">Details</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

StockCard.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    currency: PropTypes.string,
    changesPercentage: PropTypes.string.isRequired,
  }).isRequired,
  handleDetailClick: PropTypes.func.isRequired,
};

export default StockCard;
