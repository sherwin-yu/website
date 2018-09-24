import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 0px 8px;
  height: 35px;
  width: 100%;
  outline: none;
  border: none;
  background-color: lightgray;
`;

const Input = ({ type, name, label, placeholder, value, onChange }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

Input.defaultProps = {
  label: '',
  placeholder: '',
  value: ''
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default Input;
