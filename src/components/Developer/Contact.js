import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 20px;
  min-height: 50vh;
  background-color: #eae9e9;
  color: black;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 15px 0px;
`;

const SectionHeader = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 10px;
  color: #1d3557;
`;

const ContactMessage = styled.p`
  margin: 50px 0px;
`;

const LinkButton = styled.a`
  text-decoration: none;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #1d3557;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #1d3557;
  font-size: 0.9em;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;

const Contact = () => (
  <Section>
    <div className="col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12">
      <SectionHeader>What&#39;s Next?</SectionHeader>
      <ContactMessage>
        My inbox is always open. Feel free to send me a message to get in touch, and I&#39;ll do my best to answer your
        email.
      </ContactMessage>
      <ButtonWrapper>
        <LinkButton href="mailto:sherwinhyu@gmail.com">
          <Button type="button">CONTACT</Button>
        </LinkButton>
      </ButtonWrapper>
    </div>
  </Section>
);

export default Contact;
