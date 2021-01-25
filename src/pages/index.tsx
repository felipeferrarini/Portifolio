import React from 'react';
import Head from 'next/head';
import { Container, Nav, Social } from '../styles/pages/Home';
import Link from 'next/link';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <Container className="page">
      <Head>
        <title>Felipe de Abreu Ferrarini | Portifólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/">
        <h1>Felipe de Abreu Ferrarini</h1>
      </Link>
      <h2>
        <span>Developer | Computer Engineering Student</span>
      </h2>

      <Nav id="nav">
        <ul>
          <li>
            <Link href="/">Inicio</Link>
            <div id={`border${router.pathname === '/' ? 'Active' : ''}`}></div>
          </li>
          <li>
            <Link href="/Sobre">Sobre</Link>
            <div
              id={`border${router.pathname === '/Sobre' ? 'Active' : ''}`}
            ></div>
          </li>
          <li>
            <Link href="/Curriculo">Curriculo</Link>
            <div
              id={`border${router.pathname === '/Curriculo' ? 'Active' : ''}`}
            ></div>
          </li>
          <li>
            <Link href="/Projetos">Projetos</Link>
            <div
              id={`border${router.pathname === '/Projetos' ? 'Active' : ''}`}
            ></div>
          </li>
          <li>
            <Link href="/Certificados">Certificados</Link>
            <div
              id={`border${
                router.pathname === '/Certificados' ? 'Active' : ''
              }`}
            ></div>
          </li>
          <li>
            <Link href="/Contato">Contato</Link>
            <div
              id={`border${router.pathname === '/Contato' ? 'Active' : ''}`}
            ></div>
          </li>
        </ul>
      </Nav>

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
    </Container>
  );
};

export default Home;
