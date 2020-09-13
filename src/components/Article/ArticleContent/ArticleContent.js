import React from 'react'
import { withRouter } from 'react-router-dom'

const articleContent = (props) => (
  <React.Fragment>
    <h4
      className="text-center mb-2 text-capitalize"
    >
      {props.match.params.title.replace(/_/g, ' ')}
    </h4>
    <hr className="w-100" />
    {props.children}
  </React.Fragment>
)

export default withRouter(articleContent)