import React from 'react';
import ExperienceBar from '../../ExperienceBar';
import CompletedChallenges from '../CompletedChallenges';
import Countdown from '../Countdown';
import HomeProfile from '../Profile/HomeProfile'
import { Container } from './styles';

const HomeMain: React.FC = () => {
  return (

    <Container>

      <ExperienceBar />

      <section>

        <div>
          <HomeProfile />
          <CompletedChallenges />
          <Countdown />
        </div>


      </section>

    </Container>
  );
};

export default HomeMain;
