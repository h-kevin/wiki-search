import React from 'react'

import classes from './DescriptionParagraph.module.css'

const descriptionParagraph = (props) => (
  <p className={classes.DescriptionParagraph + " text-center text-monospace"}>
    {props.children}
  </p>
)

export default descriptionParagraph