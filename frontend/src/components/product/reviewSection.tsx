"use client";

import useReviews from "@/context/useReviews";
import useUser from "@/context/useUser";
import Stars from "./Stars";
import { Textarea } from "../ui/textarea";
import useAuth from "@/context/useAuth";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import Link from "next/link";
import ReviewDialog from "./reviewDialog";
import useProducts from "@/context/useProducts";

type ReviewSectionProps = {
  productId: string;
};

const ReviewSection = ({ productId }: ReviewSectionProps) => {
  const { reviews } = useReviews(productId || "");
  const { users } = useUser();
  const { user } = useAuth();
  const { products } = useProducts();
  const [isOpen, setIsOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);


  const handleClick = () => {
    if (user) {
      setOpenDialog(true);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className={`w-full flex shadow-2xl flex-col bg-white rounded-md p-4`}>
      <div className="flex items-center justify-center w-full relative">
        <h1 className={`text-center text-black font-bold text-2xl flex items-center gap-2`}>
          Avaliações - Nota geral:
          <Stars
            number={
              products?.find((product) => product.id === productId)?.rating ||
              "0"
            }
          />
        </h1>

        <ReviewDialog
          productId={productId}
          openDialog={openDialog}
          setDialog={setOpenDialog}
        />

        <AlertDialog open={isOpen}>
          <AlertDialogTrigger asChild>
            <Button
              className={`absolute right-0 bg-darkGreen`}
              onClick={handleClick}
            >
              Avaliar produto
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                <h1 className={`text-center text-black`}>
                  Faça login para avaliar o produto
                </h1>
              </AlertDialogTitle>
              <AlertDialogDescription>
                Para avaliar o produto, você precisa estar logado.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction>
                <Link href="/">Login</Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div>
        {reviews?.map((review, index) => {
          const { comentary, userId, rating } = review;
          return (
            <div key={index} className={`flex flex-col items-start m-8`}>
              <div className={`flex`}>
                <p
                  className={`text-black flex items-center gap-2 font-bold text-2xl`}
                >
                  {users?.find((user) => user.id === userId)?.name} -
                  <Stars number={rating} />
                </p>
              </div>
              <Textarea
                className={`w-full h-20 bg-gray-100 rounded-md p-4 text-xl`}
                value={comentary}
                readOnly
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSection;
