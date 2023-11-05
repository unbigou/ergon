import { Product, tenProductList } from "@/utils/types";
import { create } from "zustand";

export interface ProductsContextProps {
  products: Product[];
  filteredProducts: Product[] | false;
  setProducts: (products: Product[]) => void;
  setFilteredProducts: (products: Product[] | false) => void;
}

const useProducts = create<ProductsContextProps>()(
  (set): ProductsContextProps => ({
    products: tenProductList,
    setProducts: (products: Product[]) => set({ products }),
    filteredProducts: false,
    setFilteredProducts: (products: Product[] | false) =>
      set({ filteredProducts: products }),
  })
);

export default useProducts;
