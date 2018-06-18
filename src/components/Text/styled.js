import styled from 'styled-components'

const Style = {}

Style.Darken = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.3em;
  color: ${props => props.theme.grayDarken};
  text-transform: ${props => props.uppercase && 'uppercase'};
`
Style.Light = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.3em;
  color: ${props => props.theme.grayLight};
  text-transform: ${props => props.uppercase && 'uppercase'};
`

Style.Medium = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.3em;
  color: ${props => props.theme.grayMedium};
  text-transform: ${props => props.uppercase && 'uppercase'};
`

export default Style
