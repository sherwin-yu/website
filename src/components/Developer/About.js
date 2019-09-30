import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 20px;
  height: 60vh;
  background-color: lightsteelblue;
  color: white;
  display: flex;
  align-items: center;
`;

const SectionHeader = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
`;

const About = () => (
  <Section>
    <div className="col-lg-6 offset-lg-3">
      <SectionHeader>About Me</SectionHeader>
      <p style={{ marginBottom: '20px' }}>
        Hi, I&#39;m Sherwin, a software engineer based in the Greater New York City area who enjoys creating
        extraordinary websites and web apps.
      </p>
      <p style={{ marginBottom: '20px' }}>
        I graduated from the{' '}
        <a href="https://uconn.edu" target="_blank">
          University of Connecticut
        </a>{' '}
        with a Bachelor of Science in Computer Science and joined a cloud engineering team at{' '}
        <a href="https://ibm.com" target="_blank">
          IBM
        </a>{' '}
        shortly after where I constantly learn and work on a variety of meaningful projects on a daily basis.
      </p>
      <p>Here are some of the skills I picked up along my journey: </p>
      <div className="row">
        <div className="col-md-4">
          <ul>
            <li>Javascript (ES6)</li>
            <li>HTML</li>
            <li>CSS/Sass</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
);

export default About;
