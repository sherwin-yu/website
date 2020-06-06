import React from 'react';
import styled from 'styled-components';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledFooter = styled.footer`
  min-height: 100px;
  background-color: #1d3557;
  margin-bottom: 0;
  padding: 15px;
  text-align: center;
  display: flex;
  align-items: center;
`;

const SocialLinks = styled.ul`
  margin-bottom: 10px;
`;

const ListItem = styled.li`
  font-size: 32px;
  display: inline;
  margin-right: 20px;
  a {
    color: #eae9e9;
    &:hover {
      cursor: pointer;
      color: #d4d7dd;
    }
  }
`;

const CodeLink = styled.div`
  a {
    color: #eae9e9;
    text-decoration: none;
    &:hover {
      color: #d4d7dd;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="bx--col-lg-10 bx--offset-lg-1 bx--col-xs-12">
      <SocialLinks>
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
      </SocialLinks>
      <CodeLink>
        <a href="https://github.com/sherwin-yu/website">
          <FontAwesomeIcon icon={faCode} /> Designed and developed by Sherwin Yu
        </a>
      </CodeLink>
    </div>
  </StyledFooter>
);

export default Footer;
