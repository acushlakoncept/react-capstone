import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import TopNav from '../components/TopNav';
import StockDetailsContainer from '../container/StockDetailsContainer';

export default function Detailpage() {
  return (
    <Container className="pt-5 pb-5">
      <TopNav />
      <StockDetailsContainer />
      <Footer />
    </Container>
  );
}
