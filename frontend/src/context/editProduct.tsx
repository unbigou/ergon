import { ProductRes } from "@/utils/types";
import { create } from "zustand";

export interface EditProductContextProps {
  product: ProductRes | false;
  openDialog: boolean;
  setDialog: (openDialog: boolean) => void;
  setProduct: (product: ProductRes | false) => void;
}

const useEditProduct = create<EditProductContextProps>()(
  (set): EditProductContextProps => ({
    product: false,
    setProduct: (product: ProductRes | false) => set({ product }),
    openDialog: false,
    setDialog: (openDialog: boolean) => set({ openDialog }),
  })
);

export default useEditProduct;
