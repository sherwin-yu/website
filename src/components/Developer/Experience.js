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

const Experience = () => (
  <Section>
    <div className="bx--row">
      <div className="bx--col-lg-8 bx--offset-lg-2">
        <SectionHeader>Relevant Experience</SectionHeader>
        <p>Software Engineer @ IBM, Armonk, NY</p>
        <p>December 2015 - Present</p>
      </div>
    </div>
  </Section>
);

export default Experience;
