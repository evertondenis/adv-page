import styled from 'styled-components'

const StyledHero = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: end;
  grid-gap: 15px;
  font-size: 1.8em;
  color: #fff;

  .info {
    padding-right: 20px;
    border-right: 1px solid ${props => props.theme.purpleLight};

    p {
      padding: 0;
      margin: 0;
    }

    .logout {
      color: ${props => props.theme.secondary};
      border-bottom: 1px solid transparent;
      text-decoration: none;
      transition: 0.2s all linear;

      &:hover {
        border-bottom: 1px solid ${props => props.theme.secondary};
      }
    }

  }

  .pic {
    width:60px;
  }

  .icon-config {
    font-size: 2.5em;
    transition: 0.2s all linear;

    &:hover {
      transform: rotate(90deg);
    }
  }
`

export default StyledHero
