import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  align-self: center;
  height: 100%;
  justify-content: space-between;

  .nav-item {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 1.8em;
    text-align: center;
    color: ${props => props.theme.white};
    padding: 2em 2.5em;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 5px solid transparent;
    transition: all 0.2s linear;

    :hover {
      color: ${props => props.theme.secondary};
      border-bottom: 5px solid ${props => props.theme.secondary};
    }

    &.active {
      border-bottom: 5px solid ${props => props.theme.secondary};
      color: ${props => props.theme.secondary};
    }
  }
`

export default StyledNav
