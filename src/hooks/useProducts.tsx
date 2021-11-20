/* eslint-disable react/jsx-no-constructed-context-values */
import {
  useContext,
  ReactNode,
  createContext,
  useState,
  useEffect,
  useRef,
} from 'react';
import { toast } from 'react-toastify';
import Products from '../types';

interface ProductsContext {
  products: Products[];
  setProducts: (products: Products[]) => void;
  addProduct: (product: Products) => void;
  removeProduct: (id: string) => void;
  editModalOpen: boolean;
  toggleEditModal: () => void;
  editProduct: (id: string) => void;
  editingProduct: Products;
  handleEditedProduct: (product: Products) => void;
}

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContext = createContext({} as ProductsContext);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Products[]>(() => {
    const storagedproducts = localStorage.getItem('@Controle:products');

    if (storagedproducts) {
      return JSON.parse(storagedproducts);
    }

    return [];
  });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState({} as Products);

  // Atualiza o localStorage, sempre que o estado products for alterado, LINHA 44 a LINHA 57.
  // comparando o estado anterior com o atual.
  const prevProductsRef = useRef<Products[]>(products);

  useEffect(() => {
    prevProductsRef.current = products;
  });

  const productsPreviousValue = prevProductsRef.current ?? products;

  useEffect(() => {
    if (productsPreviousValue !== products) {
      localStorage.setItem('@Controle:products', JSON.stringify(products));
    }
  }, [products, productsPreviousValue]);

  // Adiciona um novo produto, com as informações do formulário.
  const addProduct = (product: Products) => {
    try {
      const updatedProducts = [...products];
      const productIdExists = updatedProducts.find(
        (p) => p.productId === product.productId
      );

      if (productIdExists) {
        toast.error('Produto já cadastrado');
        return;
      }
      const newProduct = {
        ...product,
        available: true,
      };
      updatedProducts.push(newProduct);
      setProducts(updatedProducts);
      toast.success('Produto cadastrado com sucesso');
    } catch (error) {
      toast.error('Erro na adição do produto');
    }
  };

  // Remove o produto pelo id
  const removeProduct = (productId: string) => {
    try {
      const productExists = products.find((p) => p.productId === productId);
      if (productExists) {
        const updatedProducts = products.filter(
          (p) => p.productId !== productId
        );
        setProducts(updatedProducts);
      } else {
        toast.error('Erro na remoção do produto');
      }
    } catch (error) {
      toast.error('Erro na remoção do produto');
    }
  };

  // Salva o produto editado no estado products.
  const handleEditedProduct = (product: Products) => {
    try {
      const updatedProducts = products.map((p) =>
        p.productId === product.productId ? product : p
      );
      setProducts(updatedProducts);
      setEditModalOpen(!editModalOpen);
      toast.success('Produto editado com sucesso');
    } catch (error) {
      toast.error('Erro na edição do produto');
    }
  };

  // Abre o modal de edição e carrega o produto no formulário, atraves do id.
  const editProduct = (productId: string) => {
    try {
      const productExists = products.find((p) => p.productId === productId);
      if (productExists) {
        setEditingProduct(productExists);
      } else {
        toast.error('Erro na edição do produto');
      }
    } catch (error) {
      toast.error('Erro na edição do produto');
    }
  };

  // Abre o modal de edição.
  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  };

  const productsContext = {
    products,
    setProducts,
    addProduct,
    removeProduct,
    editModalOpen,
    toggleEditModal,
    editProduct,
    editingProduct,
    handleEditedProduct,
  };

  return (
    <ProductsContext.Provider value={productsContext}>
      {children}
    </ProductsContext.Provider>
  );
};

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}
