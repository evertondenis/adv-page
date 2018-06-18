import styled from 'styled-components'

export const StyledInputFilter = styled.div`
  display: flex;
  align-items: center;

  .icon-search {
    position: relative;
    right: 25px;
    font-size: 2em;
    color: ${props => props.theme.grayMedium};
  }

  input {
    width: 100%;
    padding: 5px;
    height: 2em;
    border-radius: 2px;
    border: 1px solid ${props => props.theme.grayLight};
    color: ${props => props.theme.grayMedium};
    font-size: 2em;

    ::placeholder {
      color: ${props => props.theme.grayLight};
      font-weight: normal;
    }

    :-ms-input-placeholder {
      color: ${props => props.theme.grayLight};
      font-weight: normal;
    }

    ::-ms-input-placeholder {
      color: ${props => props.theme.grayLight};
      font-weight: normal;
    }
  }

`
