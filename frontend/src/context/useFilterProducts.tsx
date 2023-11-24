import { ProductRes } from "@/utils/types";
import { create } from "zustand";

export interface ProductsContextProps {
  filteredProducts: ProductRes[] | false;
  setFilteredProducts: (products: ProductRes[] | false) => void;
}

const useFilterProducts = create<ProductsContextProps>()(
  (set): ProductsContextProps => ({
    filteredProducts: false,
    setFilteredProducts: (products: ProductRes[] | false) =>
      set({ filteredProducts: products }),
  })
);

export default useFilterProducts;
