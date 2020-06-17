import React from 'react'
import {NavLink} from 'react-router-dom'
import {Nav, Navbar, Button,FormControl,Form} from 'react-bootstrap';
import '../css/Nav.css'


function MyNav(props){
  return(


    <Navbar bg="dark" expand="lg" variant='dark'>
      <header>My Movies</header>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <NavLink exact to="/Moives" className='link' activeClassName='link-active'>Movies</NavLink>
          <NavLink exact to="/TvShows" className='link' activeClassName='link-active'>Tv Shows</NavLink>
          <NavLink exact to="/Watchlist" className='link' activeClassName='link-active'>Watchlist</NavLink>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" id='search-button'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MyNav;
