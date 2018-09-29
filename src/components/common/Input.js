import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 0px 8px;
  height: 40px;
  outline: none;
  border: none;
  background-color: lightgray;
  border-radius: 3px;
  box-sizing: border-box;
`;

const Input = ({ type, name, label, placeholder, value, onChange, required }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

Input.defaultProps = {
  label: '',
  placeholder: '',
  value: '',
  required: false
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool
};

export default Input;
