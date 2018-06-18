import { injectGlobal } from 'styled-components'

export default injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans');

  body {
    font-size: 62.5%;
    font-family: 'IBM Plex Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fbfbfb;
  }

  * {
    box-sizing: border-box;
  }

  .container {
    margin: 0 auto;
    padding: 20px;
    width: 100%;

    /* @media (max-width: 992px) {
      width: 992px;
    } */

    /* @media (max-width: 768px) {
      width: 768px;
    }

    @media (max-width: 376px) {
      width: 376px;
    } */
  }
`
