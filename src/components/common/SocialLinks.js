import React from 'react';
import styled from 'styled-components';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FlexWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  margin-left: 15px;
  margin-top: 75px;
`;

const ListItem = styled.li`
  font-size: 32px;
  margin-bottom: 15px;
  a {
    color: #420000;
    &:hover {
      cursor: pointer;
      color: #0062ff;
    }
  }
`;

const SocialLinks = () => (
  <FlexWrapper>
    <ul>
      <ListItem>
        <a href="https://github.com/sherwin-yu">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.linkedin.com/in/sherwinhyu">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.instagram.com/sherwin.yu">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </ListItem>
    </ul>
  </FlexWrapper>
);

export default SocialLinks;
