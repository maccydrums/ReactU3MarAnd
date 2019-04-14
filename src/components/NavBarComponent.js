import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

//Renderar en Navbar med tre länkar
class NavBarComponent extends Component {
  render() {
    return (
        <div>
          <NavLink to = '/login' activeClassName="my-class">Login</NavLink>
          <NavLink to = '/dashboard' activeClassName="my-class">Dashboard</NavLink>
          <NavLink to = '/user' activeClassName="my-class">User</NavLink>
        </div>
    );
  }
}

export default NavBarComponent;
