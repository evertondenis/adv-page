import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Icon from 'components/Icon'
import { StyledInputFilter } from  './styled'

class InputFilter extends PureComponent {
  render() {
    const { placeholder, className, inputRef, onChange } = this.props
    return (
      <StyledInputFilter className={className}>
        <input
          ref={inputRef}
          placeholder={placeholder}
          onChange={text => onChange(text)}
        />
        <Icon icon="search" className="icon-search" />
      </StyledInputFilter>
    )
  }
}

InputFilter.defaultProps = {
  className: '',
  onChange: () => null,
  placeholder: 'search',
  inputRef: undefined
}

InputFilter.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputRef: PropTypes.any
}

export default InputFilter
