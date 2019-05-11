import React from 'react';
import styled from 'styled-components';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled.div`
  font-size: 28px;
  margin-bottom: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const SocialLinks = () => (
  <div style={{ marginTop: '100px' }}>
    <Icon>
      <FontAwesomeIcon icon={faGithub} />
    </Icon>
    <Icon>
      <FontAwesomeIcon icon={faLinkedin} />
    </Icon>
    <Icon>
      <FontAwesomeIcon icon={faInstagram} />
    </Icon>
  </div>
);

export default SocialLinks;
