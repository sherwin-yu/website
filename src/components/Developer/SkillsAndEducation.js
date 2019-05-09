import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 20px;
  height: 75vh;
`;

const SectionHeader = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
`;

const SkillsAndEducation = ({ skills }) => (
  <Section>
    <div className="bx--row">
      <div className="bx--col-lg-4 bx--offset-lg-2">
        <SectionHeader>Skills</SectionHeader>
        <ul>
          {skills.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="bx--col-lg-4">
        <SectionHeader>Education</SectionHeader>
        <p>University of Connecticut</p>
        <p>B.S. Computer Science</p>
        <p>Management Information Systems Certificate</p>
      </div>
    </div>
  </Section>
);

export default SkillsAndEducation;
