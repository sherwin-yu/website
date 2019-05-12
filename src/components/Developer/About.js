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

const About = () => (
  <Section>
    <div className="bx--row">
      <div className="bx--col-lg-8 bx--offset-lg-2">
        <SectionHeader>About Me</SectionHeader>
        <p>
          Hi, I&#39;m Sherwin, a software engineer based in the Greater New York City area who enjoys creating
          extraordinary websites and web apps. When I&#39;m not coding you will find me taking pictures or travelling.
        </p>
        <p>
          I graduated from the University of Connecticut with a Bachelor of Science in Computer Science and joined a
          cloud engineering team at IBM shortly after where I constantly learn and work on a variety of meaningful
          projects on a daily basis.
        </p>
      </div>
    </div>
  </Section>
);

export default About;
