import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BsFillForwardFill } from 'react-icons/bs';
import { FcBullish, FcBearish } from 'react-icons/fc';
import notFound from '../imgs/not_found.jpg';

export default function StockDetail({ stockItem }) {
  // eslint-disable-next-line no-nested-ternary
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
              <span className={`${stockItem.changes > 0 ? 'text-success' : 'text-danger'}`}>{ stockItem.changes }</span>
              <BsFillForwardFill color="transparent" />
              {stockItem.changes > 0 ? <FcBullish size={40} /> : <FcBearish size={40} />}
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
            <img
              src={stockItem.image}
              alt={stockItem.symbol}
              onError={e => {
                e.target.src = notFound;
              }}
              className="float-left m-2 img-thumbnail w-25"
            />
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
