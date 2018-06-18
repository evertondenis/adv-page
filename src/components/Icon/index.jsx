import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ icon , className, children }) => (
  <i
    className={`fa fa-${icon} ${className}`}
  >
    {children}
  </i>
)

Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired
}
Icon.defaultProps = {
  children: undefined,
  className: ""
}

export default Icon

