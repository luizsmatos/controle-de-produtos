import { Link, useLocation } from 'react-router-dom';
import { FaBox } from 'react-icons/fa';

import Container from './styles';

const Header = () => {
  const location = useLocation();
  return (
    <Container>
      <div className="title">
        <FaBox size={70} />
        <div>
          <h1>Controle de Produtos</h1>
          <p>Fature mais com menos estoque!</p>
        </div>
      </div>
      <div className="menu">
        <nav>
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
        </nav>
      </div>
    </Container>
  );
};

export default Header;
