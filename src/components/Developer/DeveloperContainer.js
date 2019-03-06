import React, { Component } from 'react';

class DeveloperContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      skills: ['JavaScript', 'Node', 'Express', 'React']
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
          <div className="col-xs-12 col-md-6 offset-md-3">
            <h1>Sherwin Yu</h1>
            <p>Software Engineer</p>

            <h2>Work Experience</h2>
            <p>IBM</p>
            <p>December 2015 - Present</p>

            <h2>Skills</h2>
            <ul>
              {skills.map(skill => (
                <li>{skill}</li>
              ))}
            </ul>

            <section>
              <h2>Education</h2>
              <p>University of Connecticut</p>
              <p>B.S. Computer Science</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default DeveloperContainer;
