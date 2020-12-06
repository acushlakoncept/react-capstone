import React from 'react';
import { Container } from 'react-bootstrap';
import StockDetail from '../components/StockDetail';
import TopNav from '../components/TopNav';

export default function StockDetailsContainer() {
  return (
    <Container className="pt-5 pb-5">
      <TopNav />
      <StockDetail />
    </Container>
  );
}
