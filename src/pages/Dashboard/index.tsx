import Header from '../../components/Header';
import Product from '../../components/Product';
import { useProducts } from '../../hooks/useProducts';

import Container from './styles';

const Dashboard = () => {
  const { products } = useProducts();

  return (
    <>
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
