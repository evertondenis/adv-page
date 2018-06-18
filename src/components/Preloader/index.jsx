import React from 'react'
import PropTypes from 'prop-types'
import loading from 'core/assets/images/loading.svg'
import StyledLoader from './styled'

const Loading = ({ active }) => active && (
  <StyledLoader>
    <img src={loading} alt="loading" />
  </StyledLoader>
)

Loading.defaultProps = {
  active: true,
}

Loading.propTypes = {
  active: PropTypes.bool,
}

export default Loading
