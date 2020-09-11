import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import { Nav, Navbar } from 'react-bootstrap'

const toolbar = (props) => (
  <Navbar expanded={props.expanded} bg="light" expand="lg">
    <Navbar.Brand onClick={props.clicked}>
      <Logo />
    </Navbar.Brand>
    <Navbar.Toggle onClick={props.toggled} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav onClick={props.clicked} className="ml-auto">
        <NavigationItems />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default toolbar