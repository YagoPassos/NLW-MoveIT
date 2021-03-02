import React from 'react';

import { Container, Overlay, Button  } from './styles';

const LevelUpModal: React.FC = () => {
  return (
    <Overlay>
      <Container>
        <header>2</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <Button>
          <img src="icons/close.svg" alt="" />
        </Button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
