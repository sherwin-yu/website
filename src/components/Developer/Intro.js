import React from 'react';
import styled from 'styled-components';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  <>
    <Section>
      <div className="col-xl-7 col-lg-8 col-md-8 offset-xl-1 offset-lg-1 offset-md-1 col-xs-12">
        <p>Hello, my name is</p>
        <Name>Sherwin Yu</Name>
        <p>I&#39;m a Software Engineer based in the Greater New York City area. </p>
        <ButtonWrapper>
          <Button>
            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>CONTACT</div>
          </Button>
        </ButtonWrapper>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-xs-12">
        <ProfileImage src={profilePic} />
      </div>
    </Section>
    <div>
      <FontAwesomeIcon icon={faAngleDown} style={{ height: '40px', width: '40px' }} />
    </div>
  </>
);

export default Intro;
