import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, NotActiveBox, ActiveBox, Button } from './styles';

const ChallengerBox: React.FC = () => {

  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const {stopCountdown} = useContext(CountdownContext)

  function handleChallengeSucceeded(){
    completeChallenge();
    stopCountdown();

  }

  function handleChallengeFailed(){
    resetChallenge();
    stopCountdown();
  }

  return (
    <Container>
      {
        activeChallenge ?

        (<ActiveBox>
          <header>Ganhe {activeChallenge.amount}xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <Button onClick={()=> handleChallengeFailed()}>
              Falhei
            </Button>
            <Button onClick={()=> handleChallengeSucceeded()}>
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
