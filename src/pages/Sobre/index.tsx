import Head from 'next/head';
import React from 'react';
import {
  FaAngleRight,
  FaRobot,
  FaRegLightbulb,
  FaUserSecret,
  FaUikit
} from 'react-icons/fa';
import { Container } from '../../styles/pages/Sobre/style';
import { GiArchiveResearch } from 'react-icons/gi';
import { FcAutomatic } from 'react-icons/fc';
import { BsClipboardData } from 'react-icons/bs';
import { IoGlobeOutline } from 'react-icons/io5';

const Sobre: React.FC = () => {
  const interesses = [
    { name: 'Research', svg: <GiArchiveResearch color={'#FFBB2C'} /> },
    { name: 'Artificial Intelligence', svg: <FaRobot color="#5578FF" /> },
    { name: 'Automação de Processsos', svg: <FcAutomatic /> },
    { name: 'Data Science', svg: <BsClipboardData color={'#E361FF'} /> },
    { name: 'Web Developer', svg: <IoGlobeOutline color="#47aeff" /> },
    { name: 'Inovação', svg: <FaRegLightbulb color="#11DBCF" /> },
    { name: 'Segurança da Informação', svg: <FaUserSecret color="#E80368" /> },
    { name: 'UI/UX', svg: <FaUikit color="#9466FF" /> }
  ];

  return (
    <Container className="page">
      <Head>
        <title>Sobre | Felipe de Abreu Ferrarini</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="card">
        <div id="head">
          <h3>SOBRE</h3>
          <div id="bar" />
        </div>

        <h1>SOBRE MIM</h1>

        <div id="sobre">
          <h3>Olá</h3>
          <ul>
            <li>
              <FaAngleRight />
              <span>
                Atualmente sou estudante de Engenharia da Computação na UCL -
                Faculdade do Centro Leste (Manguinhos, Serra - ES) e faço
                estágio na Vale apoiando nas diversas áreas de PCM. Voltado para
                a área de tecnologia, trabalho com Automatização de processos e
                Criação de robôs para modificações em massa no sistema da
                empresa.
              </span>
            </li>
            <li>
              <FaAngleRight />
              <span>
                Busco obter base de conhecimento em todas as áreas do
                ecossistema da tecnologia, desde Programação Web, Data Science
                até Segurança da Informação, mas minha paixão mesmo é o
                desenvolvimento Frontend e poder criar interfaces que ajudem na
                experiência do usuário.
              </span>
            </li>
            <li>
              <FaAngleRight />
              <span>
                Já desenvolvi projetos para Web e Mobile utilizando tecnologias
                como Javascript, CSS, ReactJS, React Native para o FrontEnd e
                Python, Banco de Dados SQL e NOSQL, Django Framework para o
                BackEnd.
              </span>
            </li>
          </ul>
        </div>

        <div id="head">
          <h3>INTERESSES</h3>
          <div id="bar" />
        </div>

        <div id="interesses">
          {interesses.map((interesse, index) => (
            <div id="item" key={index}>
              {interesse.svg}
              <span>{interesse.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Sobre;
