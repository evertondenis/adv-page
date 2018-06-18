import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import StyledNav from './styled'

class Nav extends PureComponent {
  renderItems = ({ title, link }) => {
    const { location } = this.props
    const { pathname } = location
    const active = link === pathname
    const className = active ? 'nav-item active' : 'nav-item'

    return (
      <Link key={title} to={link} className={className}>
        <span>{title}</span>
      </Link>
    )
  }

  render() {
    const { items } = this.props

    return (
      <StyledNav>
        {items.map(item => this.renderItems(item))}
      </StyledNav>
    )
  }
}

Nav.propTypes = {
  items: PropTypes.array.isRequired
}

export default Nav
