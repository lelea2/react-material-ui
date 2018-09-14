import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputDiv = styled.div`
  padding: 12px 16px 16px 16px;
`;

const SearchBoxInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ededed;
  width: calc(100% - 24px);
  border-radius: 2px;
  font-size: 16px;
  &:focus,
  &:active {
    border: 1px solid #5769CC;
  }
`;

class InputSearch extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <InputDiv>
        <SearchBoxInput type="text" onChange={this.props.handleOnChange} />
      </InputDiv>
    );
  }
}

InputSearch.propTypes = {
  handleOnChange: PropTypes.func.isRequired
};

InputSearch.defaultProps = {
  handleOnChange: () => null
};

export default InputSearch;
