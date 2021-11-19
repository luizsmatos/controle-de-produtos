import Header from '../../components/Header';
import Product from '../../components/Product';
import products from '../../helpers/initialProducts';

import Container from './styles';

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Container>
    </>
  );
};

export default Dashboard;
