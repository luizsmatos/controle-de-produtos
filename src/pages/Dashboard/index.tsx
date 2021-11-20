import Header from '../../components/Header';
import ModalEditProduct from '../../components/ModalEditProduct';
import Product from '../../components/Product';
import { useProducts } from '../../hooks/useProducts';

import Container from './styles';

const Dashboard = () => {
  const { products, toggleEditModal, editModalOpen } = useProducts();

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
