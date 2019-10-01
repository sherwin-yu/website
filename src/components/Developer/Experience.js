import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 20px;
  height: 60vh;
  background-color: #b8b0b0;
  color: white;
  display: flex;
  align-items: center;
`;

const SectionHeader = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 10px;
`;

const Location = styled.span`
  font-style: italic;
  font-size: 18px;
`;

const Date = styled.span`
  font-size: 18px;
  position: relative;
  text-align: right;
`;

const StyledList = styled.ul`
  padding-left: 40px;
  list-style-type: circle;
`;

const Experience = () => (
  <Section>
    <div className="col-lg-6 offset-lg-3">
      <SectionHeader>Work Experience</SectionHeader>
      <p>
        IBM <Location>Armonk, NY</Location>
      </p>
      <Date>December 2015 - Present</Date>
      <p>Software Engineer</p>
      <StyledList>
        <li>
          Develop internal applications to enhance the capabilities of IBM Cloud using emerging technologies such as
          Angular, React, Redux, and Node.js.
        </li>
        <li>Help maintain and provide support for a dedicated instance of IBM Cloud.</li>
        <li>
          Mentored a group of four interns and another group of two interns by planning and leading sprints and scrums
          as well as providing technical leadership for their projects.
        </li>
      </StyledList>
    </div>
  </Section>
);

export default Experience;
