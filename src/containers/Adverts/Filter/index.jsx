import React, { PureComponent } from 'react'
import InputFilter from 'components/InputFilter'
import { StyledContainer, StyledFilter, StyledBreadcrumbs } from './styled'

class Filter extends PureComponent {
  inputRef = React.createRef()

  onChange(text) {
    this.setState({ value: this.inputRef })
  }

  render() {
    return (
      <StyledContainer className="container">
        <StyledBreadcrumbs>
          <h1>Anúncios ></h1>
          <h2>ANÚNCIOS</h2>
        </StyledBreadcrumbs>
        <StyledFilter>
          <InputFilter
            inputRef={this.inputRef}
            placeholder="Digite para filtrar"
            onChange={() => this.onChange()}
          />
        </StyledFilter>
      </StyledContainer>
    )
  }
}

export default Filter
