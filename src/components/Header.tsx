import React from 'react';
import { Container } from '../styles/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Container url={router.pathname}>
      <h1>
        <Link href="/">Felipe de Abreu Ferrarini</Link>
      </h1>
    </Container>
  );
};

export default Header;
