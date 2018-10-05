import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  margin-bottom: 10px;
  padding: 0px 8px;
  height: 40px;
  outline: none;
  border: none;
  background-color: lightgray;
  border-radius: 3px;
  color: white;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ id, type, name, children, onClick }) => (
  <div>
    <StyledButton id={id} type={type} name={name} onClick={onClick}>
      {children}
    </StyledButton>
  </div>
);

Button.defaultProps = {
  type: '',
  id: ''
};

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string
};

export default Button;
