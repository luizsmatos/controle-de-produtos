import { Link, useLocation } from 'react-router-dom';

import Container from './styles';

const Header = () => {
  const location = useLocation();
  return (
    <Container>
      <div>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link
          to="/produtos"
          className={location.pathname === '/produtos' ? 'active' : ''}
        >
          Meus Produtos
        </Link>
        <Link
          to="/novo-produto"
          className={location.pathname === '/novo-produto' ? 'active' : ''}
        >
          Novo Produto
        </Link>
      </div>
    </Container>
  );
};

export default Header;
