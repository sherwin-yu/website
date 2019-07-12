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

const Location = styled.span`
  font-size: 18px;
  font-style: italic;
`;

const Education = () => (
  <Section>
    <div className="row">
      <div className="col-md-6 offset-md-2">
        <SectionHeader>Education</SectionHeader>
        <p>
          University of Connecticut <Location>Storrs, CT</Location>
        </p>
        <p>2011-2015</p>
        <p>B.S. Computer Science</p>
        <p>Management Information Systems Certificate</p>
      </div>
      <div className="col-md-3">
        <img src="https://s3.amazonaws.com/uconnhuskies.com/images/main_logo.svg" alt="UConn Huskies" />
      </div>
    </div>
  </Section>
);

export default Education;
