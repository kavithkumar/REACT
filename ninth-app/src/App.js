import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import ToDos from './Components/ToDos';
import Products from './Components/Product';
import { CardProducts } from './Components/CardProducts';
import { ProductCard } from './Components/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartItems } from './Components/CartItems';
import CartDetails from './Components/CartDetails';

function App() {
  const cartDetails=useSelector((store)=>store.Carts.cartItems)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Redux-Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart({cartDetails.length})</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path='/products' element={<CardProducts></CardProducts>}></Route>
      <Route path='/cart' element={<CartDetails></CartDetails>}></Route>
    </Routes>
    </BrowserRouter>
      {/* <Counter></Counter><br></br>
      <b>ToDos:</b>
      <ToDos></ToDos><br></br>
      <Products></Products><br></br>
      <CardProducts></CardProducts><br></br>
      <CardProducts></CardProducts> */}
    </div>
  );
}

export default App;