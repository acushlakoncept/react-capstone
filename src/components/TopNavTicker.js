import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

function TopNavTicker({ handleFormClick }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">STOCKIST</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/news">Stock News</Nav.Link>
      </Nav>
      <Form inline onSubmit={handleFormClick}>
        <FormControl
          type="text"
          placeholder="Search Stock"
          className="mr-sm-2"
          name="ticker"
        />
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  );
}

TopNavTicker.propTypes = {
  handleFormClick: PropTypes.func.isRequired,
};

export default TopNavTicker;
