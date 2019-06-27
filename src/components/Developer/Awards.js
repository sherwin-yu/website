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
    <div className="bx--row">
      <div className="bx--col-lg-8 bx--offset-lg-2">
        <SectionHeader>Awards</SectionHeader>
        <p>IBM Finance & Operations Recognition Award</p>
        <p>
          In recognition of your contributions supporting IBM and Finance and Operations strategic priorities in 2019
        </p>
      </div>
    </div>
  </Section>
);

export default Awards;
