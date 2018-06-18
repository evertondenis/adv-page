import { createBrowserHistory } from 'history'
// import { isAuthenticated, initApplication } from './auth'


const isProduction = process.env.NODE_ENV === 'production'

/* istanbul ignore next */
export const logPageView = () => {
  if (isProduction) {
    global.hj && global.hj('stateChange', global.window.location.pathname)
  }
}

export const checkLogged = async () => {
  /* if (isProduction) {
    isAuthenticated()
    await initApplication()
  } */
}

export const history = createBrowserHistory()
