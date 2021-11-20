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
  addProduct: (product: Products) => void;
  removeProduct: (id: string) => void;
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

  // const productsContext = useMemo(
  //   () =>
  //     ({
  //       products,
  //       addProduct,
  //       removeProduct,
  //     } as ProductsContext),
  //   []
  // );

  const productsContext = {
    products,
    addProduct,
    removeProduct,
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
