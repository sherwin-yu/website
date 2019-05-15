import React, { Component } from 'react';
import Intro from './Intro';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';

class DeveloperContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value }); // eslint-disable-line react/no-unused-state
  }

  handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log('SUBMITING', this.state);
  }

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-12 bx--col-lg-10 bx--offset-lg-1">
            <Intro />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Contact
              name={name}
              email={email}
              subject={subject}
              message={message}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DeveloperContainer;
