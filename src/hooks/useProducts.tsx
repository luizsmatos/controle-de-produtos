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
  removeProduct: (id: number) => void;
  editModalOpen: boolean;
  toggleEditModal: () => void;
  editProduct: (id: number) => void;
  editingProduct: Products;
  handleEditedProduct: (product: Products) => void;
  id: number;
}

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContext = createContext({} as ProductsContext);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [id, setId] = useState(() => {
    const storagedproducts = localStorage.getItem('@Controle:products');

    if (storagedproducts) {
      const parsedProducts = JSON.parse(storagedproducts);

      if (parsedProducts.length > 0) {
        const getTheLastId = JSON.parse(storagedproducts).pop();
        return getTheLastId.id + 1;
      }
    }

    return 0;
  });
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
      setId(id + 1);
      toast.success('Produto cadastrado com sucesso');
    } catch (error) {
      toast.error('Erro na adição do produto');
    }
  };

  // Remove o produto pelo id
  const removeProduct = (pId: number) => {
    try {
      const productExists = products.find((p) => p.id === pId);
      if (productExists) {
        const updatedProducts = products.filter((p) => p.id !== pId);
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
      const updatedProducts = [...products];
      const getProduct = updatedProducts.find((p) => p.id === product.id);

      // Verifica se o produto editado possui um id já existente.
      if (product.productId !== getProduct?.productId) {
        const productIdAlreadyExists = updatedProducts.find(
          (p) => p.productId === product.productId
        );
        if (productIdAlreadyExists) {
          toast.error('Produto já cadastrado');
          return;
        }
      }
      const editedProducts = updatedProducts.map((p) =>
        p.id === product.id ? product : p
      );
      setProducts(editedProducts);
      setEditModalOpen(!editModalOpen);

      toast.success('Produto editado com sucesso');
    } catch (error) {
      toast.error('Erro na edição do produto');
    }
  };

  // Abre o modal de edição e carrega o produto no formulário, atraves do id.
  const editProduct = (pId: number) => {
    try {
      const productExists = products.find((p) => p.id === pId);
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
    id,
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
