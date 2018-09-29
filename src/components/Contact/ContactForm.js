import React from 'react';
import Input from '../common/Input';

const ContactForm = ({ name, email, subject, message, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Input type="text" name="name" label="Name" value={name} onChange={handleChange} required />
    <Input type="email" name="email" label="Email" value={email} onChange={handleChange} required />
    <Input type="text" name="subject" label="Subject" value={subject} onChange={handleChange} required />
    <label>Message</label>
    <textarea name="message" value={message} onChange={handleChange} required />
    <button type="submit">Send Message</button>
  </form>
);

export default ContactForm;
