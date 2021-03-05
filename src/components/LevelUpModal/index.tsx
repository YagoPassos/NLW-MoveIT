import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, Overlay, Button  } from './styles';

const LevelUpModal: React.FC = () => {

  const { level, closeLevelUpModal} = useContext(ChallengesContext)

  return (
    <Overlay>
      <Container>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <Button onClick={()=> {closeLevelUpModal()}}>
          <img src="icons/close.svg" alt="" />
        </Button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
