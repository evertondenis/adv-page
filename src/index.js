import React from 'react'
import { render } from 'react-dom'
import Routes from './routes'
import { ThemeProvider } from 'styled-components'
import 'core/assets/style/global'
import "font-awesome/css/font-awesome.css"
import theme from 'core/assets/style/theme'

const renderApp = async () => {
  const app = (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
  render(app, document.getElementById('root'))
}

renderApp()

