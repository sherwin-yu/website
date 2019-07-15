import React from 'react';
import { TextInput, TextArea, Button } from 'carbon-components-react';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 20px;
  height: 75vh;
  background-color: lightgreen;
  color: white;
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 15px;
`;
const SectionHeader = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
`;

const Contact = ({ handleChange, handleSubmit }) => (
  <Section>
    <div className="col-lg-6 offset-lg-3">
      <SectionHeader>Contact</SectionHeader>

      <div className="col-lg-8 offset-lg-2">
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <TextInput type="text" name="name" labelText="Name" onChange={handleChange} required />
          </InputWrapper>
          <InputWrapper>
            <TextInput type="email" name="email" labelText="Email" onChange={handleChange} required />
          </InputWrapper>
          <InputWrapper>
            <TextInput type="text" name="subject" labelText="Subject" onChange={handleChange} required />
          </InputWrapper>
          <InputWrapper>
            <TextArea name="message" labelText="Message" rows={5} onChange={handleChange} required />
          </InputWrapper>
          <ButtonWrapper>
            <Button type="submit">Send Message</Button>
          </ButtonWrapper>
        </form>
        <Button type="button">CONTACT</Button>
      </div>
    </div>
  </Section>
);

export default Contact;
