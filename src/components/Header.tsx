import React, { useEffect, useState } from 'react';
import {
  Container,
  NavMobile,
  SideMenuButtton
} from '../styles/components/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Nav } from '../styles/pages/Home';
import { FaBars } from 'react-icons/fa';

const Header: React.FC = () => {
  const router = useRouter();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(false);
  }, [router.pathname]);

  return (
    <>
      <Container>
        <SideMenuButtton>
          <button id="sideMenu" onClick={() => setMobile(true)}>
            <FaBars />
          </button>

          {mobile && (
            <button
              id="sideMenuOut"
              onClick={() => {
                setMobile(false);
              }}
            ></button>
          )}
        </SideMenuButtton>

        {router.pathname !== '/' && (
          <>
            <Link href="/">
              <h1>Felipe de Abreu Ferrarini</h1>
            </Link>

            <Nav>
              <ul>
                <li>
                  <Link href="/">Inicio</Link>
                  <div
                    id={`border${router.pathname === '/' ? 'Active' : ''}`}
                  ></div>
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
                    id={`border${
                      router.pathname === '/Curriculo' ? 'Active' : ''
                    }`}
                  ></div>
                </li>
                <li>
                  <Link href="/Projetos">Projetos</Link>
                  <div
                    id={`border${
                      router.pathname === '/Projetos' ? 'Active' : ''
                    }`}
                  ></div>
                </li>
                <li>
                  <Link href="/Contato">Contato</Link>
                  <div
                    id={`border${
                      router.pathname === '/Contato' ? 'Active' : ''
                    }`}
                  ></div>
                </li>
              </ul>
            </Nav>
          </>
        )}
      </Container>

      {mobile && (
        <NavMobile>
          <Link href="/">
            <h1>Felipe de Abreu Ferrarini</h1>
          </Link>

          <ul>
            <li>
              <Link href="/">Inicio</Link>
              <div
                id={`border${router.pathname === '/' ? 'Active' : ''}`}
              ></div>
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
              <Link href="/Contato">Contato</Link>
              <div
                id={`border${router.pathname === '/Contato' ? 'Active' : ''}`}
              ></div>
            </li>
          </ul>
        </NavMobile>
      )}
    </>
  );
};

export default Header;
