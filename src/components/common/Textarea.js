import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  border-radius: 3px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border: none;
  background-color: lightgray;
  min-height: 40px;
`;

const TextareaLabel = styled.p`
  margin-bottom: 5px;
`;

const Textarea = ({ label, name, placeholder, rows, onChange, required }) => (
  <div>
    <TextareaLabel>{label}</TextareaLabel>
    <StyledTextarea
      name={name}
      id="textarea"
      placeholder={placeholder}
      rows={rows}
      onChange={onChange}
      required={required}
    />
  </div>
);

Textarea.defaultProps = {
  label: '',
  placeholder: '',
  rows: 1,
  required: false
};

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

export default Textarea;
