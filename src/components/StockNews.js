import React from 'react';
import PropTypes from 'prop-types';
import {
  Jumbotron, Container, Row, Col,
} from 'react-bootstrap';

function StockNews({ news }) {
  return (
    <Jumbotron fluid className="rounded mt-3 mb-2">
      <Container>
        <Row>
          <Col md={4}>
            {' '}
            <img src={news.image} className="img-fluid img-thumbnail rounded" alt="" />
          </Col>
          <Col md={8}>
            <h1>{news.symbol}</h1>
            <h4>{news.title}</h4>
            <small className="text-muted">
              published:
              {news.publishedDate}
            </small>
            <hr />
            <p className="lead">
              {news.text}
              <br />
              <a href={news.url} className="text-light btn btn-success mt-2" target="__blank" rel="noopener"> Read more</a>
            </p>
          </Col>
        </Row>

      </Container>
    </Jumbotron>
  );
}

StockNews.propTypes = {
  news: PropTypes.shape({
    image: PropTypes.string,
    symbol: PropTypes.string,
    title: PropTypes.string,
    publishedDate: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
  }),
};

StockNews.defaultProps = {
  news: {},
};

export default StockNews;
