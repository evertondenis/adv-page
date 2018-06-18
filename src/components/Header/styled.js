import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${props => props.theme.purpleDark};
`

export const StyledContainer = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;

  @media (min-width: 376px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr, 1fr;
  }

  @media (min-width: 1170px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const StyledHeaderLogo = styled.div`
  display: flex;
  align-items: center;
`

export const StyledHeaderBack = styled.div`
  display: none;
`

export const StyledHeaderLeft = styled.div`
  display: flex;
  align-items: center;
`

export const StyledTitleHeader = styled.span`
  color: ${props => props.theme.grayMedium};
  font-weight: normal;
`
