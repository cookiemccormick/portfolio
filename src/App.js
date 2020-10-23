import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Alisa Cookie McCormick</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">
        <BrowserRouter>
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/blog' component={Blog} />
            <Route path='/contact' component={Contact} />
            <Route path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;