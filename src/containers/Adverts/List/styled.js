import styled from 'styled-components'

export const StyledList = styled.div`
  width: 100%;
  border-radius: 2px;
  border: 1px solid #f1f1f1;
  background-color: ${props => props.theme.white};
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);

  p {
    margin: 0;
    padding: 0;
  }

  h1 {
    padding: 0 20px;
    font-size: 3em;
    color: ${props => props.theme.primary};
    font-weight: normal;
  }
`
