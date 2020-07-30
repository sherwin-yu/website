import React from 'react';
import styled from 'styled-components';

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
`;

const StyledList = styled.ul`
  padding-left: 40px;
  list-style-type: none;
`;

const Projects = () => (
  <Section>
    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12">
      <SectionHeader>Projects</SectionHeader>
      <ProjectTitle>Spotify Overview</ProjectTitle>
      <div>A web application visualizing an overview of your Spotify profile.</div>
      <StyledList>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Spotify Web API</li>
      </StyledList>
    </div>
  </Section>
);

export default Projects;
