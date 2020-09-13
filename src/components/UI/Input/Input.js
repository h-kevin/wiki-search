import React from 'react'

import { FormControl } from 'react-bootstrap'

const input = (props) => {
  let inputElement = <FormControl
    className="text-center w-50 mb-2"
    value={props.value}
    onChange={props.changed}
    {...props.elementConfig}
  />

  return inputElement
}

export default input