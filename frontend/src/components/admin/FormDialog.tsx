"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { DialogHeader } from "../ui/dialog";
import ProductForm from "./ProductForm";
import useEditProduct from "@/context/editProduct";

const FormDialog = () => {
  const { product, openDialog, setDialog, setProduct } = useEditProduct();

  return (
    <Dialog
      open={openDialog}
      onOpenChange={(openDialog: boolean) => {
        setDialog(openDialog);
        setProduct(false);
      }}
    >
      <DialogTrigger asChild>
        <Button className="rounded-sm px-4 py-2 text-white">
          {product ? "Editar produto" : "Adicionar produto"}
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-fit"
        onInteractOutside={() => {
          setDialog(false);
          setProduct(false);
        }}
      >
        <DialogHeader>
          <DialogTitle>
            <h3>Editar produto {product ? product.name : null}</h3>
          </DialogTitle>
          <DialogDescription>
            <ProductForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
