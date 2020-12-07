import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import TopNavTicker from '../components/TopNavTicker';
import StockDetailsContainer from '../container/StockDetailsContainer';

export default function Detailpage() {
  return (
    <Container className="pt-5 pb-5">
      <TopNavTicker />
      <StockDetailsContainer />
      <Footer />
    </Container>
  );
}
