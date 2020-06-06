import React from 'react';
import styled from 'styled-components';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  position: absolute;
  margin-left: 15px;
  margin-top: 15px;
  z-index: 999;
  float: right;
  right: 15px;
  top: 0;
`;

const SocialItem = styled.a`
  font-size: 36px;
  margin-right: 15px;
  cursor: pointer;
  color: #171717;
  &:hover {
    cursor: pointer;
    color: #171717;
  }
`;

const SocialLinks = () => (
  <Wrapper>
    <SocialItem href="https://github.com/sherwin-yu">
      <FontAwesomeIcon icon={faGithub} />
    </SocialItem>
    <SocialItem href="https://www.linkedin.com/in/sherwinhyu">
      <FontAwesomeIcon icon={faLinkedin} />
    </SocialItem>
    <SocialItem href="https://www.instagram.com/sherwin.yu">
      <FontAwesomeIcon icon={faInstagram} />
    </SocialItem>
  </Wrapper>
);

export default SocialLinks;
