import React, { Component } from 'react'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

class Layout extends Component {
  state = {
    navExpanded: false
  }

  closeCollapse = () => {
    this.setState({
      navExpanded: false
    })
  }

  toggleCollapse = () => {
    this.setState((prevState) => {
      return {navExpanded: !prevState.navExpanded}
    })
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar
          clicked={this.closeCollapse}
          toggled={this.toggleCollapse}
          expanded={this.state.navExpanded}
        />
        <main className="p-4 min-vh-100 d-flex align-items-center" onClick={this.closeCollapse}>
          {this.props.children}
        </main>
      </React.Fragment>
    )
  }
}

export default Layout