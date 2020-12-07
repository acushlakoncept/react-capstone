import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  Button,
} from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
export default function TopNav({ handleOnSelect }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">STOCKIST</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Stock News</Nav.Link>
      </Nav>
      <Form inline>
        <Form.Control onChange={handleOnSelect} as="select" className="mr-sm-2">
          <option value="active">Most Active </option>
          <option value="gainers">Most Gainers </option>
          <option value="losers">Most Losers </option>
        </Form.Control>
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  );
}
