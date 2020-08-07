import React from 'react';
import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import spotifyOverview from '../../assets/spotifyOverview.png';

const Section = styled.section`
  font-size: 20px;
  min-height: 50vh;
  background-color: #f6f6f6;
  color: black;
  display: flex;
  align-items: center;
  padding: 15px 0px;
`;

const SectionHeader = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 10px;
  color: #1d3557;
`;

const ProjectTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.div`
  margin-bottom: 1rem;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const Tag = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0.32px;
  display: inline-flex;
  align-items: center;
  padding: 0 0.7rem;
  height: 2rem;
  margin: 0.5rem;
  border-radius: 0.9375rem;
  color: white;
  background-color: #457b9d;
`;

const WebPreview = styled.img`
  width: 350px;
`;

const LinkWrapper = styled.div`
  margin: 1rem 0;
`;

const ExternalLink = styled.a`
  font-size: 32px;
  margin-right: 15px;
  cursor: pointer;
  color: #171717;
  &:hover {
    cursor: pointer;
    color: lightgray;
  }
`;

const Projects = () => (
  <Section>
    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12">
      <SectionHeader>Projects</SectionHeader>
      <div className="row">
        <div className="col-md-8 col-xs-12">
          <ProjectTitle>Spotify Overview</ProjectTitle>
          <ProjectDescription>A web application visualizing an overview of your Spotify profile.</ProjectDescription>
          <StyledList>
            <Tag>React</Tag>
            <Tag>Node.js</Tag>
            <Tag>Express</Tag>
            <Tag>Spotify Web API</Tag>
          </StyledList>
          <LinkWrapper>
            <ExternalLink
              href="https://github.com/sherwin-yu/spotify-overview"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faGithub} />
            </ExternalLink>
            <ExternalLink href="https://spotifyoverview.herokuapp.com" target="_blank" rel="noreferrer noopener">
              <FontAwesomeIcon icon={faLink} />
            </ExternalLink>
          </LinkWrapper>
        </div>
        <div className="col-md-4 col-xs-12">
          <WebPreview src={spotifyOverview} alt="spotifyoverview" />
        </div>
      </div>
    </div>
  </Section>
);

export default Projects;
