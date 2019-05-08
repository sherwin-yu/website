import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileImage from '../common/ProfileImage';
import profilePic from '../../assets/profilePicture.jpeg';

const Name = styled.div`
  font-size: 72px;
  margin-bottom: 25px;
`;

const SectionHeader = styled.div`
  font-weight: bold;
`;

const Section = styled.section`
  font-size: 20px;
  margin-bottom: 75px;
`;

class DeveloperContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      skills: ['JavaScript (ES6)', 'React', 'Redux', 'Node.js', 'Express']
    };
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value }); // eslint-disable-line react/no-unused-state
  }

  render() {
    const { skills } = this.state;
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-12 bx--col-lg-10 bx--offset-lg-1">
            <div className="bx--row">
              <div className="bx--col-lg-7">
                <Section>
                  <p>Hello, my name is</p>
                  <Name>Sherwin Yu.</Name>
                  <p>I&#39;m a Software Engineer based in the New York Tri-State area. </p>
                </Section>
              </div>
              <div className="bx--col-lg-5">
                <ProfileImage src={profilePic} />
              </div>
            </div>

            <div className="bx--row">
              <div className="bx--col-lg-8 bx-offset-lg-3">
                <Section>
                  <SectionHeader>About Me</SectionHeader>
                  <p>
                    Hi, I&#39;m Sherwin, a software engineer based in the New York Tri-State area who enjoys creating
                    extraordinary websites and web apps. When I&#39;m not coding you will find me taking pictures or
                    travelling.
                  </p>
                  <p>
                    I graduated from the University of Connecticut with a Bachelor of Science in Computer Science and
                    joined a cloud engineering team at IBM shortly after where I constantly learn and work on a variety
                    of meaningful projects on a daily basis.
                  </p>
                </Section>
              </div>
            </div>

            <Section>
              <SectionHeader>Relevant Experience</SectionHeader>
              <p>Software Engineer @ IBM, Armonk, NY</p>
              <p>December 2015 - Present</p>
            </Section>

            <div className="bx--row">
              <div className="bx--col-lg-6">
                <Section>
                  <SectionHeader>Skills</SectionHeader>
                  <ul>
                    {skills.map(skill => (
                      <li>{skill}</li>
                    ))}
                  </ul>
                </Section>
              </div>

              <div className="bx--col-lg-6">
                <Section>
                  <SectionHeader>Education</SectionHeader>
                  <p>University of Connecticut</p>
                  <p>B.S. Computer Science</p>
                  <p>Management Information Systems Certificate</p>
                </Section>
              </div>
            </div>
            <Section>
              <SectionHeader>Contact</SectionHeader>
            </Section>
          </div>
        </div>
      </div>
    );
  }
}

export default DeveloperContainer;
