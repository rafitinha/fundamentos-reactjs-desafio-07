import React from 'react';

import { useLocation, Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <Link to="/">
          <img src={Logo} alt="GoFinances" />
        </Link>
        <nav>
          {useLocation().pathname === '/import' ? (
            <Link to="/">Inicio</Link>
          ) : (
            <Link to="/import">Importar</Link>
          )}
        </nav>
      </header>
    </Container>
  );
};

export default Header;
