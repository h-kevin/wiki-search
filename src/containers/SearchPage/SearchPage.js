import React, { Component } from 'react'

import ArticleCard from '../../components/Article/ArticleCard/ArticleCard'
import Input from '../../components/UI/Input/Input'
import { Form } from 'react-bootstrap'

class SearchPage extends Component {
  state = {
    controls: {
      searchBox: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Search'
        },
        value: '',
        validation: {},
        valid: true,
        touched: false
      }
    }
  }

  inputChangedHandler = (e, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: e.target.value,
        touched: true
      }
    }

    this.setState({
      controls: updatedControls
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
  }

  render() {
    const formElementArray = []

    for (let key in this.state.controls) {
      formElementArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }

    let form = formElementArray.map(formElement => (
      <Input
        key={formElement.id}
        elementIdentifier={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(e) => this.inputChangedHandler(e, formElement.id)}
      />
    ))

    return (
      <div className="mt-5 align-self-start">
        <Form
          className="d-flex justify-content-center"
          onSubmit={this.submitHandler}
        >
          {form}
        </Form>
        <hr />
        <ArticleCard
          title="Black Hole"
          imageUrl="https://cdn.eso.org/images/thumb300y/eso1907a.jpg"
        >
          {"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half" + "..."}
        </ArticleCard>
        <ArticleCard
          title="Black Hole"
          imageUrl="https://www.oakridge.in/wp-content/uploads/2020/02/Sample-jpg-image-500kb.jpg"
        >
          {"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half" + "..."}
        </ArticleCard>
      </div>
    )
  }
}

export default SearchPage