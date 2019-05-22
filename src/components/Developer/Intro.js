import React from 'react';
import styled from 'styled-components';
import { Button } from 'carbon-components-react';
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

const ButtonWrapper = styled.div`
  margin: 30px 0px;
`;

const Intro = () => (
  <Section>
    <div className="bx--col-xl-8 bx--col-lg-8 bx--col-md-8 bx--col-xs-12">
      <p>Hello, my name is</p>
      <Name>Sherwin Yu</Name>
      <p>I&#39;m a Software Engineer based in the Greater New York City area. </p>
      <ButtonWrapper>
        <Button>
          <div style={{ fontWeight: 'bold', fontSize: '18px' }}>CONTACT</div>
        </Button>
      </ButtonWrapper>
    </div>
    <div className="bx--col-xl-4 bx--col-lg-4 bx--col-md-4 bx--col-xs-12">
      <ProfileImage src={profilePic} />
    </div>
  </Section>
);

export default Intro;
