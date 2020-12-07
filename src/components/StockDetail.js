import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BsFillForwardFill } from 'react-icons/bs';
import { FcBullish } from 'react-icons/fc';

export default function StockDetail({ stockItem }) {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="shadow-sm pb-2 mb-3">
            { stockItem.symbol }
            <small className="priceChange">
              <BsFillForwardFill color="transparent" />
              Price:
              {' '}
              { stockItem.price }
              <BsFillForwardFill color="transparent" />
              Price change:
              {' '}
              { stockItem.changes }
              <BsFillForwardFill color="transparent" />
              <FcBullish size={40} />
            </small>
          </h1>
          <h4 className="text-center text-success">
            { stockItem.companyName }
            <BsFillForwardFill color="transparent" />
            <small>
              Industry:
              { stockItem.industry }
            </small>
            <hr />
          </h4>
          <p className="lead text-justify readMaxLength">
            <img src={stockItem.image} alt={stockItem.symbol} className="float-left m-2" />
            { stockItem.description }
            <a href={stockItem.website} target="__blank" rel="noopener">
              {' '}
              Visit Website
            </a>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

StockDetail.propTypes = {
  stockItem: PropTypes.shape({
    symbol: PropTypes.string,
    price: PropTypes.number,
    changes: PropTypes.number,
    companyName: PropTypes.string,
    industry: PropTypes.string,
    website: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

StockDetail.defaultProps = {
  stockItem: {},
};
