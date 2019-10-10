import React from 'react';
import { Button } from 'carbon-components-react';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 20px;
  height: 50vh;
  background-color: #eae9e9;
  color: black;
  display: flex;
  align-items: center;
  text-align: center;
`;

const SectionHeader = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 10px;
  color: #420000;
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

const StyledButton = styled(Button)`
  padding: 0.875rem 50px;
  background-color: #408bfc;
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
          <StyledButton type="button">
            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>CONTACT</div>
          </StyledButton>
        </LinkButton>
      </ButtonWrapper>
    </div>
  </Section>
);

export default Contact;
