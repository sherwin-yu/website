import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 20px;
  height: 60vh;
  background-color: lightseagreen;
  color: white;
  display: flex;
  align-items: center;
`;

const SectionHeader = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
`;

const Awards = () => (
  <Section>
    <div className="col-lg-6 offset-lg-3">
      <SectionHeader>Awards</SectionHeader>
      <p>IBM Finance & Operations Recognition Award</p>
      <p>In recognition of your contributions supporting IBM and Finance and Operations strategic priorities in 2019</p>
    </div>
  </Section>
);

export default Awards;
