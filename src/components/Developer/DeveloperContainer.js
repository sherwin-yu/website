import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileImage from '../common/ProfileImage';
import profilePic from '../../assets/profilePicture.jpeg';

const Name = styled.div`
  font-size: 72px;
`;

class DeveloperContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      skills: ['JavaScript (ES6)', 'Node.js', 'Express', 'React', 'Redux']
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
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="row">
              <div className="col-md-7">
                <section>
                  <p>Hello, my name is</p>
                  <Name>Sherwin Yu.</Name>
                  <p>I&#39;m a Software Engineer based in the New York Tri-State area. </p>
                </section>
              </div>
              <div className="col-md-5">
                <ProfileImage src={profilePic} />
              </div>
            </div>

            <section>
              <h2>About Me</h2>
              <p>
                Hi, I&#39;m Sherwin, a software engineer based in the New York Tri-State area who enjoys creating
                extraordinary websites and web apps. When I&#39;m not coding you will find me taking pictures or
                travelling.
              </p>
              <p>
                I graduated from the University of Connecticut with a Bachelor of Science in Computer Science and joined
                a cloud engineering team at IBM shortly after where I constantly learn and work on a variety of
                meaningful projects on a daily basis.
              </p>
            </section>

            <section>
              <h2>Relevant Experience</h2>
              <p>Software Engineer @ IBM, Armonk, NY</p>
              <p>December 2015 - Present</p>
            </section>

            <div className="row">
              <div className="col-md-6">
                <section>
                  <h2>Skills</h2>
                  <ul>
                    {skills.map(skill => (
                      <li>{skill}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="col-md-6">
                <section>
                  <h2>Education</h2>
                  <p>University of Connecticut</p>
                  <p>B.S. Computer Science</p>
                  <p>Management Information Systems Certificate</p>
                </section>
              </div>

              <section>
                <h2>Contact</h2>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeveloperContainer;
