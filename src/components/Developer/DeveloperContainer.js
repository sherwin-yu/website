import React, { Component } from 'react';
import Intro from './Intro';
import About from './About';
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
    const body = this.state;
    fetch('/api/mail', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body)
    })
      .then(response => {
        this.state = {};
        return response.json();
      })
      .catch(err => err);
  }

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <>
        <Intro />
        <About />
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
      </>
    );
  }
}

export default DeveloperContainer;
