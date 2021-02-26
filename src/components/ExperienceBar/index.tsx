import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, Header, ExpProgress, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {

  const { currentExperience, experienceToNextLevel} = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <Header>
        <span>0 xp</span>
        <div>
          <ExpProgress style={{width:`${percentToNextLevel}%`}} />
          <CurrentExperience style={{left:`${percentToNextLevel}%`}}>
            {currentExperience} xp
          </CurrentExperience>
        </div>
        <span>{experienceToNextLevel} xp</span>
        </Header>
    </Container>
  );
};

export default ExperienceBar;
