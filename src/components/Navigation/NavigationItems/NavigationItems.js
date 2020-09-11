import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
  <React.Fragment>
    <NavigationItem link="/">Home</NavigationItem>
    <NavigationItem link="/search">Search</NavigationItem>
  </React.Fragment>
)

export default navigationItems