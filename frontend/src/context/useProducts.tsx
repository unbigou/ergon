import { ProductRes } from "@/utils/types";
import { create } from "zustand";

export interface ProductsContextProps {
  products: ProductRes[];
  filteredProducts: ProductRes[] | false;
  setProducts: (products: ProductRes[]) => void;
  setFilteredProducts: (products: ProductRes[] | false) => void;
}

const useProducts = create<ProductsContextProps>()(
  (set): ProductsContextProps => ({
    products: [],
    setProducts: (products: ProductRes[]) => set({ products }),
    filteredProducts: false,
    setFilteredProducts: (products: ProductRes[] | false) =>
      set({ filteredProducts: products }),
  })
);

export default useProducts;
