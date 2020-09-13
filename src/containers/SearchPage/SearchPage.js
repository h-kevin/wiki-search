import React, { Component } from 'react'
import striptags from 'striptags'

import ArticleCard from '../../components/Article/ArticleCard/ArticleCard'
import Input from '../../components/UI/Input/Input'
import { Form } from 'react-bootstrap'
import axios from '../../axios'
import Spinner from '../../components/UI/Spinner/Spinner'

class SearchPage extends Component {
  state = {
    articles: null,
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
    },
    loading: false,
    error: null
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

    if (e.target.value.length >= 3) {
      (async () => {
        this.setState({
          loading: true
        })

        try {
          let res = await axios.get(`/w/rest.php/v1/search/page?q=${e.target.value}&limit=5`)
          this.setState({
            articles: res.data.pages,
            loading: false
          })
        } catch (error) {
          this.setState({
            loading: false,
            error: error
          })
        }
      })()
    } else {
      this.setState({
        articles: null
      })
    }
  }

  buttonClickedHandler = (destination) => {
    destination = destination.replace(/\s/g, '_')
    this.props.history.push(`/articles/${destination}`)
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

    let articleCards = <p className="text-center">
      Please enter a search query in order to fetch new articles...
    </p>

    if (this.state.loading) {
      articleCards = <Spinner />
    } else {
      if (this.state.error) {
        articleCards = <p
          className="text-center"
        >
          An error has occurred while trying to fetch the articles. <br />
          Please try again.
        </p>
      }

      if (this.state.articles) {
        articleCards = this.state.articles.map(page => (
          <ArticleCard
            key={page.id}
            title={page.title}
            imageUrl={page.thumbnail ? page.thumbnail.url : null}
            btnClicked={() => this.buttonClickedHandler(page.title)}
          >
            {striptags(page.excerpt)}...
          </ArticleCard>
        ))
      }
    }

    return (
      <div className="mt-5 align-self-start w-100 d-flex flex-column">
        <Form
          className="d-flex justify-content-center"
          onSubmit={this.submitHandler}
        >
          {form}
        </Form>
        <hr className="w-100" />
        {articleCards}
      </div>
    )
  }
}

export default SearchPage