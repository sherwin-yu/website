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
    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12">
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
