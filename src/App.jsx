import React from "react";
import "./App.css";
import ProductCard from "./ProductCard";
import { Container, Row, Col,Button, Navbar, Nav, Card } from "react-bootstrap";
import Nom from "./Nom";
import Images from "./Image";
import Description from "./Description";
const App = () => {
  const firstName = "Votre Prénom";
  return (
    <div className="app">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Bose</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Card style={{ width: '20rem', marginLeft:'20px' }}>
      <Images/>
      <Card.Body>
        <Card.Title><Nom/></Card.Title>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Button variant="primary">Acheter</Button>
      </Card.Body>
    </Card>
      <br />
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
      <p style={{fontSize:'2em'}}>Bonjour, {firstName ? firstName : "there"}!</p>
      </div>
    </div>
  );
};
export default App;