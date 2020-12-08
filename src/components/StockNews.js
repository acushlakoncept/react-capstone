/* eslint-disable max-len */
import React from 'react';
import {
  Jumbotron, Container, Row, Col,
} from 'react-bootstrap';

export default function StockNews() {
  return (
    <Jumbotron fluid className="rounded mt-3 mb-2">
      <Container>
        <Row>
          <Col md={4}>
            {' '}
            <img src="https://cdn.snapi.dev/images/v1/j/5/press14.jpg" className="img-fluid img-thumbnail rounded" alt="" />
          </Col>
          <Col md={8}>
            <h1>QQQ</h1>
            <h4>QQQ: Not A Tech ETF, Weirdly Constituted, But Very, Very Tempting</h4>
            <p className="lead">

              QQQ is what many investors buy when they want to tilt towards Tech though it is not really a Tech ETF. It follows a delightfully irrational index very unlike most stodgy sector indexes, but its quirkiness is why it has delivered great return.
              <br />
              <a href="https://seekingalpha.com/article/4393534-qqq-not-tech-etf-weirdly-constituted-tempting" className="text-light btn btn-success mt-2"> Read more</a>
            </p>
          </Col>
        </Row>

      </Container>
    </Jumbotron>
  );
}
