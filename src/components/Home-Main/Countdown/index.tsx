import React, { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../../../contexts/ChallengesContext';
import { CountdownContext } from '../../../contexts/CountdownContext';

import { Container, Number, StartButton, StopButton, EndButton } from './styles';

const Countdown: React.FC = () => {

  let countdownTimeout: NodeJS.Timeout;

  // const { startNewChallenge } = useContext(ChallengesContext);

  // const [time, setTime] = useState(0.05 * 60);
  // const [isActive, setIsActive] = useState(false)
  // const [hasFinished, setHasFinished] = useState(false)

  // const minutes = Math.floor(time / 60);
  // const seconds = time % 60;
  const { minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    stopCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')


  // function startCountdown() {
  //   setIsActive(true);
  // }

  // useEffect(() => {
  //   if (isActive && time > 0) {
  //     countdownTimeout = setTimeout(() => {
  //       setTime(time - 1)
  //     }, 1000)
  //   }
  //   else if (isActive && time == 0) {
  //     setHasFinished(true);
  //     setIsActive(false);
  //     startNewChallenge();
  //   }
  // }, [isActive, time])

  // function stopCountdown() {
  //   clearTimeout(countdownTimeout)
  //   setIsActive(false);
  //   setTime(0.05 * 60)
  // }
  return (
    <>
      <Container>
        <Number>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </Number>
        <span>:</span>
        <Number>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </Number>
      </Container>


      {hasFinished ?

        <EndButton disabled>
          Ciclo Encerrado
        </EndButton>

        :
        <>
          {isActive

            ?

            (<StopButton onClick={() => { stopCountdown() }}>
              Abandonar Ciclo
            </StopButton>)

            :

            (<StartButton onClick={() => { startCountdown() }}>
              Iniciar Ciclo
            </StartButton>)

          }
        </>
      }
    </>
  );
};

export default Countdown;
