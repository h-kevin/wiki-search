import React from 'react'

const button = (props) => (
  <button
    className={"btn btn-lg text-white btn-block btn-" + props.btnType}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </button>
)

export default button