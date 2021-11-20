import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { useProducts } from '../../hooks/useProducts';
import Products from '../../types';
import formatPrice from '../../util/format';

import Container from './styles';

interface ProductProps {
  product: Products;
}

const Product = ({ product }: ProductProps) => {
  const [isAvailable, setIsAvailable] = useState(product.available);
  const { removeProduct, products, setProducts } = useProducts();

  const toggleAvailable = () => {
    const uptadedProducts = [...products];

    const uptadedAvailable = uptadedProducts.map((p) => ({
      ...p,
      available: !isAvailable,
    }));

    setProducts(uptadedAvailable);
    setIsAvailable(!isAvailable);
  };

  const handleRemoveProduct = (id: string) => {
    removeProduct(id);
  };

  return (
    <Container available={isAvailable}>
      <header>
        <img src={product.image} alt={product.name} />
      </header>
      <section className="body">
        <h2>{product.name}</h2>
        <span>Codigo: {product.productId} </span>
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
            data-testid={`edit-product-${product.productId}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleRemoveProduct(product.productId)}
            data-testid={`remove-product-${product.productId}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label
            htmlFor={`available-switch-${product.productId}`}
            className="switch"
          >
            <input
              id={`available-switch-${product.productId}`}
              type="checkbox"
              checked={isAvailable}
              onChange={() => toggleAvailable()}
              data-testid={`change-status-product-${product.productId}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
};
export default Product;
