import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 20px;
  height: 60vh;
`;

const SectionHeader = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
`;

const Awards = () => (
  <Section>
    <div className="col-lg-8 offset-lg-2">
      <SectionHeader>Awards</SectionHeader>
      <p>IBM Finance & Operations Recognition Award</p>
      <p>In recognition of your contributions supporting IBM and Finance and Operations strategic priorities in 2019</p>
    </div>
  </Section>
);

export default Awards;
