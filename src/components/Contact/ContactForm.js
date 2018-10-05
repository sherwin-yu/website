import React from 'react';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';

const ContactForm = ({ name, email, subject, message, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <h2>Contact Me</h2>
    <Input type="text" name="name" label="Name" value={name} onChange={handleChange} required />
    <Input type="email" name="email" label="Email" value={email} onChange={handleChange} required />
    <Input type="text" name="subject" label="Subject" value={subject} onChange={handleChange} required />
    <Textarea name="message" label="Message" value={message} rows={5} onChange={handleChange} required />
    <Button type="submit">Send Message</Button>
  </form>
);

export default ContactForm;
