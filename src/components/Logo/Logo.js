import React from 'react'
import { NavLink } from 'react-router-dom'

import searchLogo from '../../assets/images/ws-logo.png'
import classes from './Logo.module.css'
import { Nav } from 'react-bootstrap'

const logo = () => (
  <div className={classes.Logo}>
    <Nav.Link
      as={NavLink}
      to="/"
      exact
    >
      <img src={searchLogo} alt="ws-logo" />
    </Nav.Link>
  </div>
)

export default logo