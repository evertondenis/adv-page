import styled from 'styled-components'

const StyledHistoric = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;

  & > div {
    width: 70%;
    padding-left: 20px;
    border-left: 1px solid ${props => props.theme.primary};
    font-size: 2em;

    .title {
      padding: 0;
      margin: 0;
      font-size: 1em;
      color: ${props => props.theme.grayMedium};
      text-transform: ${props => props.uppercase && 'uppercase'};
    }

    .total {
      padding: 0;
      margin: 0;
      font-size: 1.3em;
      color: ${props => props.theme.primary};
      text-transform: ${props => props.uppercase && 'uppercase'};
    }
  }


  @media (min-width: 376px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1170px) {
    grid-template-columns: repeat(6, 1fr);
  }

`

export default StyledHistoric
