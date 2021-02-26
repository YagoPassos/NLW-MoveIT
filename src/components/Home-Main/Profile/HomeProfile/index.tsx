import React, { useContext } from 'react';
import { ChallengesContext } from '../../../../contexts/ChallengesContext';

import { Container, Profile } from './styles';

const Home: React.FC = () => {
  const {level} = useContext(ChallengesContext)
  return (
    <Container>
      <Profile>
        <img src="https://github.com/yagopassos.png" alt="Imagem de Perfil" />
        <div>
          <strong>Yago Passos</strong>
          <p>
            <img src="icons/level.svg" alt="Icone Level Up" />
            Level {level}
            </p>
        </div>
      </Profile>

    </Container>
  );
};

export default Home;
