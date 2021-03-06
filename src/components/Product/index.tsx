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
  const { removeProduct, products, setProducts, toggleEditModal, editProduct } =
    useProducts();

  // Procura o produto pelo id e atualiza o estado de disponibilidade
  const toggleAvailable = (id: number) => {
    const uptadedProducts = [...products];
    const uptadedAvailable = uptadedProducts.map((p) => {
      if (p.id === id) {
        return { ...p, available: !p.available };
      }
      return p;
    });
    setProducts(uptadedAvailable);
    setIsAvailable(!isAvailable);
  };

  // Remove o produto pelo id
  const handleRemoveProduct = (id: number) => {
    removeProduct(id);
  };

  // Abre o modal de edição e carrega o produto no formulário
  const handleEditProduct = (id: number) => {
    toggleEditModal();
    editProduct(id);
  };

  return (
    <Container available={isAvailable}>
      <header>
        <img src={product.image} alt={product.name} />
      </header>
      <section className="body">
        <h2>{product.name}</h2>
        <p>Código: {product.productId} </p>
        <p>Categoria: {product.category}</p>
        <p>Fornecedor: {product.supplier}</p>
        <p className="price">
          <b>{formatPrice(product.price)}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={() => handleEditProduct(product.id)}
            data-testid={`edit-product-${product.productId}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleRemoveProduct(product.id)}
            data-testid={`remove-product-${product.id}`}
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
              onChange={() => toggleAvailable(product.id)}
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
