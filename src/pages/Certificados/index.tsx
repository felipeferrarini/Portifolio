import Head from 'next/head';
import React from 'react';
import { BsCardHeading } from 'react-icons/bs';
import { Container } from '../../styles/pages/Projetos/style';

const Certificados: React.FC = () => {
  const projects = [
    {
      nome: 'Conceitos de responsividade e experiência do usuário',
      origin: 'Digital Innovation One',
      link: 'https://certificates.digitalinnovation.one/D4214D15'
    },
    {
      nome: 'Desenvolvimento avançado com JavaScript ES6',
      origin: 'Digital Innovation One',
      link: 'https://certificates.digitalinnovation.one/15CECA7A'
    }
  ];
  return (
    <Container className="page">
      <Head>
        <title>Certificados | Felipe de Abreu Ferrarini</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="card">
        <div id="head">
          <h3>CERTIFICADOS</h3>
          <div id="bar" />
        </div>

        <h1>MEUS CERTIFICADOS</h1>

        <div id="projetos">
          {projects.map((project, index) => (
            <div id="item" key={index}>
              <div id="icon">
                <BsCardHeading />
              </div>
              <a href={project.link} rel="noreferrer" target="_blank">
                <span id="nome"> {project.nome}</span>
              </a>
              <span id="tecnology">{project.origin}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Certificados;
