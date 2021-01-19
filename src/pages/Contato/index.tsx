import Head from 'next/head';
import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaRegEnvelope,
  FaAngleRight
} from 'react-icons/fa';
import { Container } from '../../styles/pages/Contato/style';
import { Social } from '../../styles/pages/Home';
import ContatoSVG from '../../assets/contato.png';

const Contato: React.FC = () => {
  return (
    <Container className="page">
      <Head>
        <title>Contato | Felipe de Abreu Ferrarini</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="card">
        <div id="head">
          <h3>CONTATO</h3>
          <div id="bar" />
        </div>

        <h1>ENTRE EM CONTATO</h1>

        <div id="contatos">
          <div id="email">
            <div id="title">
              <FaRegEnvelope />
              <h3>E-mail</h3>
            </div>

            <a id="link" href={'mailto:ferrarinifelipe@gmail.com'}>
              <FaAngleRight />
              ferrarinifelipe@gmail.com
            </a>
          </div>
          <div id="telefone">
            <div id="title">
              <FaPhone />
              <h3>Telefone</h3>
            </div>

            <a id="link" href={'tel:+5527996342390'}>
              <FaAngleRight />
              (27) 99634-2390
            </a>
          </div>
          <div id="social">
            <div id="title">
              <h3>Minhas Redes Sociais</h3>
            </div>

            <Social>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/felipe-f-b905a7a8/"
              >
                <div>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/felipe.ferrarini.9/"
              >
                <div>
                  <FaFacebookF />
                </div>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/felipeferrarini1/"
              >
                <div>
                  <FaInstagram />
                </div>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/felipeferrarini"
              >
                <div>
                  <FaGithub />
                </div>
              </a>
            </Social>
          </div>
        </div>

        <div id="imagem">
          <img src={ContatoSVG} alt="Imagem de contato" />
        </div>
      </div>
    </Container>
  );
};

export default Contato;
