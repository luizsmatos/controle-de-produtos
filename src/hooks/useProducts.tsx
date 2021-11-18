import { useContext, ReactNode, createContext } from 'react';

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContext = createContext({});

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  return (
    <ProductsContext.Provider value="">{children}</ProductsContext.Provider>
  );
};

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}
