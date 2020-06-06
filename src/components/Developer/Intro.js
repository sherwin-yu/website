import React from 'react';
import styled from 'styled-components';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Particles from 'react-particles-js';
import ProfileImage from '../common/ProfileImage';
import profilePic from '../../assets/profilePic.jpg';

const Section = styled.section`
  font-size: 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 15px 0px;
  background-color: #eae9e9;
`;

const Name = styled.div`
  font-size: 4rem;
  margin-bottom: 25px;
`;

const ButtonWrapper = styled.div`
  margin: 30px 0px;
`;

const Button = styled.button`
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #1d3557;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #1d3557;
  font-size: 0.9em;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
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
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-md-6 offset-xl-1 offset-lg-2 col-xs-12">
            <p>Hello, my name is</p>
            <Name>Sherwin Yu</Name>
            <p>
              A software engineer based in the Greater New York City area <br /> who enjoys creating extraordinary
              websites and web apps.
            </p>
            <ButtonWrapper>
              <LinkButton href="mailto:sherwinhyu@gmail.com">
                <Button type="button">CONTACT</Button>
              </LinkButton>
            </ButtonWrapper>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-xs-12">
            <ProfileImage src={profilePic} />
          </div>
        </div>
      </div>
    </Section>
    {/* <div>
      <FontAwesomeIcon icon={faAngleDown} style={{ height: '40px', width: '40px' }} />
    </div> */}
  </>
);

export default Intro;
