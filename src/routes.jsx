import React from 'react'
import Router from 'react-router-dom/Router'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import { history } from 'core/utils/route'
import Main from 'containers/Main'

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </Router>
)

export default Routes
