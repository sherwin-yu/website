import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../common/ProfileImage';
import profilePic from '../../assets/profilePicture.jpeg';

const Section = styled.section`
  font-size: 20px;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  font-size: 100px;
  margin-bottom: 25px;
`;

const Intro = () => (
  <Section>
    <div className="bx--col-lg-7">
      <p>Hello, my name is</p>
      <Name>Sherwin Yu</Name>
      <p>I&#39;m a Software Engineer based in the Greater New York City area. </p>
    </div>
    <div className="bx--col-lg-5">
      <ProfileImage src={profilePic} />
    </div>
  </Section>
);

export default Intro;
