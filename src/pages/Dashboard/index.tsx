import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import ModalEditProduct from '../../components/ModalEditProduct';
import Product from '../../components/Product';
import { useProducts } from '../../hooks/useProducts';

import Container from './styles';

const Dashboard = () => {
  const { products, toggleEditModal, editModalOpen } = useProducts();

  if (products.length === 0) {
    return (
      <>
        <Header />
        <Container>
          <div className="not-found-products">
            <h1>Nenhum produto cadastrado!</h1>
            <p>Experimente cadastrar um novo produto</p>
            <Link to="/novo-produto">
              <button type="button">Começar</button>
            </Link>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <ModalEditProduct isOpen={editModalOpen} setIsOpen={toggleEditModal} />
      <Header />
      <Container>
        {products.map((product) => (
          <Product product={product} key={product.productId} />
        ))}
      </Container>
    </>
  );
};

export default Dashboard;
