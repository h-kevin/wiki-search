import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const navigationItem = (props) => (
  <Nav.Link
    as={NavLink}
    to={props.link}
    exact
  >
    {props.children}
  </Nav.Link>
)

export default navigationItem