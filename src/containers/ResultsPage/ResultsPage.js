import React, { Component } from 'react'

import ArticleContent from '../../components/Article/ArticleContent/ArticleContent'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios'

class ResultsPage extends Component {
  state = {
    content: null,
    loading: false,
    error: null
  }

  componentDidMount() {
    (async () => {
      this.setState({
        loading: true
      })

      try {
        let url = "/w/api.php?format=json&action=query" +
          "&prop=extracts&exlimit=max&explaintext=&exintro=" +
          "&titles=" + this.props.match.params.title + "&origin=*&redirects="

        let res = await axios.get(url)
        let key = Object.keys(res.data.query.pages)[0]

        this.setState({
          content: res.data.query.pages[key].extract,
          loading: false
        })
      } catch (error) {
        this.setState({
          loading: false,
          error: error
        })
      }
    })()
  }

  render() {
    let content = <Spinner />

    if (this.state.error) {
      content = <p
        className="text-center"
      >
        An error has occurred while trying to fetch the content of this article. <br />
        Please refresh the page.
      </p>
    }

    if (this.state.content) {
      content = this.state.content
    }

    return (
      <div className="w-100 mt-5 align-self-start">
        <ArticleContent>
          {content}
        </ArticleContent>
      </div>
    )
  }
}

export default ResultsPage