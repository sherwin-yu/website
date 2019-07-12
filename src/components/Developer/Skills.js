import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 20px;
  height: 60vh;
`;

const SectionHeader = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
`;

const Skills = () => (
  <Section>
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <SectionHeader>Skills</SectionHeader>
        <p>Programming Languages</p>
        <ul>
          <li>Javascript (ES6)</li>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>SQL</li>
        </ul>
        <p>Libraries and Frameworks</p>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>AngularJS</li>
        </ul>
      </div>
    </div>
  </Section>
);

export default Skills;
