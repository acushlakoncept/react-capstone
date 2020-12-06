import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BsGraphDown, BsGraphUp, BsFillForwardFill } from 'react-icons/bs';
import notFound from '../imgs/not_found.jpg';

// const onError = () => {
//   if ('https://financialmodelingprep.com/image-stock/XRT.png') return notFound;
//   return null;
// };
function StockCard({ stock }) {
//   console.log(imageExists('https://financialmodelingprep.com/image-stock/XPEV.png'));
// <img src="http://example.com/non-existent-image.jpg" onerror="this.onerror=null;this.src='http://example.com/existent-image.jpg';" />
  return (
    <Card style={{ width: '16rem' }} className="m-2 bg-dark">
      <Card.Img className="blendMul" variant="top" src={`https://financialmodelingprep.com/image-stock/${stock.ticker}.png`} onerror={`this.src=${notFound}`} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-light font-weight-bold">{ stock.ticker }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{ stock.companyName }</Card.Subtitle>
        <Card.Text className={`d-flex justify-content-between ${stock.changesPercentage > 0 ? 'text-success' : 'text-danger'}`}>
          { ` ${stock.price} ${stock.currency || 'USD'}` }
          {' '}
          <BsFillForwardFill />
          <em>{ stock.changesPercentage }</em>
          {stock.changesPercentage > 0 ? <BsGraphUp /> : <BsGraphDown />}
        </Card.Text>
        <div className="mt-auto">
          {/* <ul className="d-flex flex-wrap justify-content-between dayPrice text-muted">
            <li>
              <strong>24h Low</strong>
              <br />
              {stock.dayLow}
            </li>
            <li>
              <strong>24h High</strong>
              <br />
              {stock.dayHigh}
            </li>
          </ul> */}
          <Button variant="outline-success w-100">Details</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
// convert timestamp to date time (new Date(timestamp * 1000)).toLocaleString()

StockCard.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    currency: PropTypes.string,
    changesPercentage: PropTypes.string.isRequired,
    // dayLow: PropTypes.number.isRequired,
    // dayHigh: PropTypes.number.isRequired,
  }).isRequired,
};

export default StockCard;
