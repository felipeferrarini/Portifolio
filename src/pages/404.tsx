import React from 'react';
import { Container } from '../styles/pages/error';
import Simpson from '../assets/simpson.png';

const FourOhFour: React.FC = () => {
  return (
    <Container>
      <div className="background"></div>
      <div id="erro">
        <img src={Simpson} alt="Curso não encontrado!" />
        <div>
          <h1 id="404">404</h1>
          <h2>Ops, página não encontrada!</h2>
        </div>
      </div>
    </Container>
  );
};

export default FourOhFour;
