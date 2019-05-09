import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  height: 3rem;
  background-color: #252525;
  color: #f3f3f3;
  z-index: 6000;
  margin-bottom: 25px;
`;

const Brand = styled.div`
  font-size: 20px;
`;

const Navbar = () => (
  <StyledNavbar>
    <div className="bx--col-lg-10 bx--offset-lg-1 bx--col-xs-12">
      <Brand>Sherwin Yu</Brand>
    </div>
  </StyledNavbar>
);

Navbar.defaultProps = {};

Navbar.propTypes = {};

export default Navbar;
