import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyledHeader, StyledContainer, StyledHeaderLogo } from './styled'

class Header extends PureComponent {
  render() {
    const { children, logo } = this.props

    return (
      <StyledHeader>
        <StyledContainer>
          <StyledHeaderLogo>
            <img src={logo} alt="logo"/>
          </StyledHeaderLogo>
          {children}
        </StyledContainer>
      </StyledHeader>
    )
  }
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Header
