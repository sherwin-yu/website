import React, { Component } from 'react';
import ContactForm from './ContactForm';

class ContactContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { name: '', email: '', subject: '', message: '' };
  }

  componentDidMount() {}

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value }); // eslint-disable-line react/no-unused-state
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('SUBMITING', this.state);
  }

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <ContactForm
        name={name}
        email={email}
        subject={subject}
        messsage={message}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default ContactContainer;
