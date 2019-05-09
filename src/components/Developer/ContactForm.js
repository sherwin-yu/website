import React from 'react';
import { TextInput, TextArea, Button } from 'carbon-components-react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 15px;
`;

const ContactForm = ({ name, email, subject, message, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <InputWrapper>
      <TextInput type="text" name="name" labelText="Name" value={name} onChange={handleChange} required />
    </InputWrapper>
    <InputWrapper>
      <TextInput type="email" name="email" labelText="Email" value={email} onChange={handleChange} required />
    </InputWrapper>
    <InputWrapper>
      <TextInput type="text" name="subject" labelText="Subject" value={subject} onChange={handleChange} required />
    </InputWrapper>
    <InputWrapper>
      <TextArea name="message" labelText="Message" value={message} rows={5} onChange={handleChange} required />
    </InputWrapper>
    <ButtonWrapper>
      <Button type="submit">Send Message</Button>
    </ButtonWrapper>
  </form>
);

export default ContactForm;
