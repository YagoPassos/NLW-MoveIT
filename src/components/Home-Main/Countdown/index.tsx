import React from 'react';

import { Container, Number } from './styles';

const Countdown: React.FC = () => {
  return (
    <Container>
      <Number>
        <span>2</span>
        <span>5</span>
      </Number>
      <span>:</span>
      <Number>
        <span>0</span>
        <span>0</span>
      </Number>
    </Container>
  );
};

export default Countdown;
