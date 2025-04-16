import { createContext, useContext } from 'react';
import { Product } from '../../App';

export const ProductContext = createContext<Product | null>(null);

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) throw new Error('context does not exist');
  return context;
};
