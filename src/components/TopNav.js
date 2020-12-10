import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  Form,
  Button,
} from 'react-bootstrap';

function TopNav({ handleOnSelect }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">STOCKIST</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/news">Stock News</Nav.Link>
        </Nav>
        <Form inline>
          <Form.Control onChange={handleOnSelect} as="select" className="mr-sm-2">
            <option value="active">Most Active </option>
            <option value="gainers">Most Gainers </option>
            <option value="losers">Most Losers </option>
          </Form.Control>
          <Button variant="outline-success">Filter by category</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

TopNav.propTypes = {
  handleOnSelect: PropTypes.func.isRequired,
};

export default TopNav;
