import styled from 'styled-components'

export const StyledAds = styled.div`
  display: block;
  padding: 3em 0;
  border-left: 2px solid ${props => props.status === 'SOLD' ? props.theme.greenLight : 'transparent'};
  transition: all 0.2s linear;

  &:hover {
    background-color: ${props => props.theme.gray}
  }

  &:not(:last-child) {
    &:after {
      content: "";
      display: block;
      width: 97%;
      margin: 3em auto -3em;
      border-bottom: 1px solid #eee;
    }
  }
`
export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const StyledItem = styled.div`
  padding-left: 20px;
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-gap: 10px;

  img {
    width: 100%;
  }
`

export const StyledInfo = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-row-gap: 30px;
  grid-template-columns: 1fr;
  align-items: center;

  & > div {
    padding: 10px;
    border-left: 1px solid ${props => props.theme.primary};
  }

  .green {
    color: ${props => props.theme.greenLight};
  }

  .blue {
    color: ${props => props.theme.secondary};
  }



  @media (min-width: 376px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1170px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
