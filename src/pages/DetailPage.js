import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import TopNavTicker from '../components/TopNavTicker';
import StockDetailsContainer from '../container/StockDetailsContainer';

export default function DetailPage() {
  const handleFormClick = e => {
    e.preventDefault();
    const url = `/stock/${e.target[0].value}`;
    window.location.href = url;
  };
  return (
    <Container className="pt-5 pb-5">
      <TopNavTicker handleFormClick={handleFormClick} />
      <StockDetailsContainer />
      <Footer />
    </Container>
  );
}
