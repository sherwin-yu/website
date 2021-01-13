import React from 'react';
import styled from 'styled-components';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileImage from '../common/ProfileImage';
import profilePic from '../../assets/profilePic.jpg';

const Section = styled.section`
  font-size: 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 15px 0px;
  background-color: #eae9e9;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
