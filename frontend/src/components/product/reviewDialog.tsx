"use client";

import useProducts from "@/context/useProducts";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { DialogHeader } from "../ui/dialog";
import ReviewForm from "./reviewForm";

type ReviewDialogProps = {
  productId: string;
  openDialog: boolean;
  setDialog: (openDialog: boolean) => void;
};

const ReviewDialog = ({
  productId,
  openDialog,
  setDialog,
}: ReviewDialogProps) => {
  const { products } = useProducts();

  return (
    <Dialog
      open={openDialog}
      onOpenChange={(openDialog: boolean) => {
        setDialog(openDialog);
      }}
    >
      <DialogContent
        className="max-w-fit"
        onInteractOutside={() => {
          setDialog(false);
        }}
      >
        <DialogHeader>
          <DialogTitle>
            <h1 className="text-2xl font-bold text-gray-600">
              Avaliar produto{" "}
              {products?.find((product) => product.id === productId)?.name}
            </h1>
          </DialogTitle>
          <DialogDescription>
            <ReviewForm productId={productId} setDialog={setDialog} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
