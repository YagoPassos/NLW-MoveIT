import React from 'react';
import ExperienceBar from '../../ExperienceBar';
import CompletedChallenges from '../CompletedChallenges';
import Countdown from '../Countdown';
import HomeProfile from '../Profile/HomeProfile'
import { Container } from './styles';

import Head from 'next/head';
import ChallengerBox from '../../ChallengerBox';


const HomeMain: React.FC = () => {
  return (

    <Container>
      <Head>
        <title>Inicio | MoveIt</title>
      </Head>

      <ExperienceBar />

      <section>

        <div>
          <HomeProfile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengerBox />
        </div>
      </section>

    </Container>
  );
};

export default HomeMain;
