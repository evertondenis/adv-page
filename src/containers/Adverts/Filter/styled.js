import styled from 'styled-components'

export const StyledContainer = styled.section`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 20px;
  align-items: center;
`

export const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`
export const StyledBreadcrumbs = styled.div`
  h1 {
    margin: 0;
    color: ${props => props.theme.grayLight};
    text-transform: uppercase;
    font-weight: normal;
  }

  h2 {
    margin: 0;
    font-size: 3em;
    color: ${props => props.theme.grayMedium};
    text-transform: uppercase;
    font-weight: normal;
  }
`
