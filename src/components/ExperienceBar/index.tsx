import React from 'react';

import { Container, Header, ExpProgress, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
  return (
    <Container>
      <Header>
        <span>0 xp</span>
        <div>
          <ExpProgress style={{width:'50%'}} />
          <CurrentExperience style={{left:'50%'}}>
            300 xp
          </CurrentExperience>
        </div>
        <span>600 xp</span>
        </Header>
    </Container>
  );
};

export default ExperienceBar;
