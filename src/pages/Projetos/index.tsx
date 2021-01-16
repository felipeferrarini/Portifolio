import Head from 'next/head';
import React from 'react';
import { Container } from '../../styles/pages/Projetos/style';

const Projetos: React.FC = () => {
  const projects = [
    {
      nome: 'StuddyHub - Frontend',
      type: 'Web App',
      link: 'https://studdyhub.com',
      tecnology: [
        'Nextjs',
        'ReactJs',
        'TypeScript',
        'Material UI',
        'Styled Components',
        'Firebase'
      ]
    },
    {
      nome: 'BUSATO PCM',
      type: 'Mobile App',
      link: '',
      tecnology: ['Kodular', 'Firebase']
    },
    {
      nome: 'Controle de Pousada',
      type: 'Desktop App',
      link: 'https://github.com/felipeferrarini/ControlePousada',
      tecnology: ['Windows Forms', 'C#']
    },
    {
      nome: 'Meu Portifólio',
      type: 'Web App',
      link: 'https://github.com/felipeferrarini/Portifolio',
      tecnology: [
        'Nextjs',
        'ReactJs',
        'TypeScript',
        'Material UI',
        'Styled Components'
      ]
    }
  ];
  return (
    <Container className="page">
      <Head>
        <title>Projetos | Felipe de Abreu Ferrarini</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="card">
        <div id="head">
          <h3>PROJETOS</h3>
          <div id="bar" />
        </div>

        <h1>MEUS PROJETOS</h1>

        <div id="projetos">
          {projects.map((project, index) => (
            <div id="item" key={index}>
              <span> {project.nome}</span>
              <span>{project.type}</span>
              <span>{project.tecnology.map(item => item + ' | ')}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projetos;
