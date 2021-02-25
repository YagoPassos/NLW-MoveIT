import React from 'react';

import { Container, NotActiveBox, ActiveBox, Button } from './styles';

const ChallengerBox: React.FC = () => {

  const hasActiveChallenge = true;

  return (
    <Container>
      {
        hasActiveChallenge ?

        (<ActiveBox>
          <header>Ganhe 400xp</header>
          <main>
            <img src="icons/body.svg" alt=""/>
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>
          <footer>
            <Button>
              Falhei
            </Button>
            <Button>
              Completei
            </Button>
          </footer>
        </ActiveBox>)

        :

        (<NotActiveBox>
          <strong>Finalize um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level UP Icon"/>
            Avance de Level completando desafios.
          </p>
        </NotActiveBox>)
      }
    </Container>
  );
};

export default ChallengerBox;
