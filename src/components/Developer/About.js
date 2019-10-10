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
  color: #420000;
`;

const Link = styled.a`
  color: #420000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
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
  background-color: #408bfc;
`;

const About = () => (
  <Section>
    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12">
      <SectionHeader>About Me</SectionHeader>
      <p style={{ marginBottom: '20px' }}>
        Hi, I&#39;m Sherwin, a software engineer based in the Greater New York City area who enjoys creating
        extraordinary web apps and specializes in DevOps.
      </p>
      <p style={{ marginBottom: '20px' }}>
        I graduated from the{' '}
        <Link href="https://uconn.edu" target="_blank">
          University of Connecticut
        </Link>{' '}
        with a Bachelor of Science in Computer Science and joined a cloud engineering team at{' '}
        <Link href="https://ibm.com" target="_blank">
          IBM
        </Link>{' '}
        shortly after where I constantly learn and work on a variety of meaningful projects on a daily basis.
      </p>
      <p>Here are some of the skills I picked up along my journey: </p>
      <div className="row">
        <div className="col-md-12">
          <Tag>Javascript (ES6)</Tag>
          <Tag>React</Tag>
          <Tag>Redux</Tag>
          <Tag>Node.js</Tag>
          <Tag>Express</Tag>
          <Tag>Docker</Tag>
          <Tag>Kubernetes</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>MongoDB</Tag>
        </div>
      </div>
    </div>
  </Section>
);

export default About;
