import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import { advertsPath } from 'core/constants/route'
import Header from 'containers/Header'
import Adverts from 'containers/Adverts'

const Main = () => (
  <main>
    <Header/>
    <Switch>
      <Route exact path={advertsPath} component={Adverts} />
    </Switch>
  </main>
)

export default Main
