import React, { Component } from 'react'

import Header from '../../components/UI/Header/Header'
import DescriptionParagraph from '../../components/UI/DescriptionParagraph/DescriptionParagraph'
import Button from '../../components/UI/Button/Button'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header>Welcome to Wiki Search</Header>
        <hr />
        <DescriptionParagraph>
          This is an application made with React!
          It allows you to enter a search query in order
          to fetch data directly from Wikipedia!
        </DescriptionParagraph>
        <Button btnType="success">
          CONTINUE
        </Button>
      </div>
    )
  }
}

export default HomePage