import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import HomePage from './containers/HomePage/HomePage'
import asyncComponent from './hoc/asyncComponent/asyncComponent'
import 'bootstrap/dist/css/bootstrap.min.css'

const asyncSearchPage = asyncComponent(() => {
  return import('./containers/SearchPage/SearchPage')
})

const asyncResultsPage = asyncComponent(() => {
  return import('./containers/ResultsPage/ResultsPage')
})

function App() {
  return (
    <Layout>
      <Switch>
        <Route
          path="/articles/:title"
          component={asyncResultsPage}
        />
        <Route
          path="/search"
          component={asyncSearchPage}
        />
        <Route
          path="/"
          component={HomePage}
          exact
        />
        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}

export default App
