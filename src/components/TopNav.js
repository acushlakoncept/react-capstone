import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

export default function TopNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">STOCKIST</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Stock News</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search Stock"
          className="mr-sm-2"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  );
}
