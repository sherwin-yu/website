import React from 'react';
import styled from 'styled-components';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'carbon-components-react';
import Particles from 'react-particles-js';
import ProfileImage from '../common/ProfileImage';
import profilePic from '../../assets/profilePic.jpg';

const Section = styled.section`
  font-size: 20px;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #eae9e9;
`;

const Name = styled.div`
  font-size: 100px;
  margin-bottom: 25px;
`;

const ButtonWrapper = styled.div`
  margin: 30px 0px;
`;

const StyledButton = styled(Button)`
  padding: 0.875rem 50px;
  background-color: #408bfc;
`;

const LinkButton = styled.a`
  text-decoration: none;
`;

const Intro = () => (
  <>
    <Particles
      params={{
        particles: {
          number: {
            value: 40
          },
          size: {
            value: 3
          },
          color: {
            value: '#000000'
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#888888',
            opacity: 0.4,
            width: 1
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            }
          }
        }
      }}
      style={{ position: 'absolute', width: '100%', height: '100%', zindex: '-1' }}
    />
    <Section>
      <div className="col-xl-6 col-lg-6 col-md-6 offset-xl-2 offset-lg-2 offset-md-2 col-xs-12">
        <p>Hello, my name is</p>
        <Name>Sherwin Yu</Name>
        <p>
          A software engineer based in the Greater New York City area <br /> who enjoys creating extraordinary websites
          and web apps.
        </p>
        <ButtonWrapper>
          <LinkButton href="mailto:sherwinhyu@gmail.com">
            <StyledButton type="button">
              <div style={{ fontWeight: 'bold', fontSize: '18px' }}>CONTACT</div>
            </StyledButton>
          </LinkButton>
        </ButtonWrapper>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-xs-12">
        <ProfileImage src={profilePic} />
      </div>
    </Section>
    {/* <div>
      <FontAwesomeIcon icon={faAngleDown} style={{ height: '40px', width: '40px' }} />
    </div> */}
  </>
);

export default Intro;
