import React from 'react';

import { Container, Profile } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/yagopassos.png" alt="Imagem de Perfil" />
        <div>
          <strong>Yago Passos</strong>
          <p>
            <img src="icons/level.svg" alt="Icone Level Up" />
            Level 1
            </p>
        </div>
      </Profile>

    </Container>
  );
};

export default Home;
