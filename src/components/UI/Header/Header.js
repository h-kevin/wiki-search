import React from 'react'

import classes from './Header.module.css'

const header = (props) => (
  <h6
    className={classes.Header + " text-success text-center font-weight-bold"}
  >
    {props.children}
  </h6>
)

export default header