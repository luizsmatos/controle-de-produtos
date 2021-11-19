import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import Products from '../../types';
import formatPrice from '../../util/format';

import Container from './styles';

interface ProductProps {
  product: Products;
}

const Product = ({ product }: ProductProps) => {
  const [isAvailable, setIsAvailable] = useState(true);

  // const toggleAvailable = async () => {
  //   await api.put(`/products/${product.id}`, {
  //     ...product,
  //     available: !isAvailable,
  //   });

  //   setIsAvailable(!isAvailable);
  // };

  // const setEditingProduct = () => {
  //   handleEditProduct(product);
  // };

  return (
    <Container available={isAvailable}>
      <header>
        <img src={product.image} alt={product.name} />
      </header>
      <section className="body">
        <h2>{product.name}</h2>
        <span>Codigo: {product.id} </span>
        <span> Categoria: {product.name}</span>
        <p>{product.description}</p>
        <p className="price">
          <b>{formatPrice(product.price)}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            // onClick={setEditingproduct}
            data-testid={`edit-product-${product.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            // onClick={() => handleDelete(product.id)}
            data-testid={`remove-product-${product.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${product.id}`} className="switch">
            <input
              id={`available-switch-${product.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={() => setIsAvailable(!isAvailable)}
              data-testid={`change-status-product-${product.id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
};
export default Product;
