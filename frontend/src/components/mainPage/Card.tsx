`use client`;

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ProductRes } from "@/utils/types";
import Link from "next/link";
import useAuth from "@/context/useAuth";
import api from "@/api/api";
import { useToast } from "../ui/use-toast";
import { ShoppingCart } from "lucide-react";

type CardProps = {
  product: ProductRes;
};

const CardsFunc = ({ product }: CardProps) => {
  const { user } = useAuth();
  const { toast } = useToast();

  const addToCart = async () => {
    if (user === undefined) {
      toast({
        title: "Você precisa estar logado para adicionar produtos ao carrinho",
        description: "Faça login ou crie uma conta",
        variant: "destructive",
      });
      return;
    }

    try {
      await api.put(
        `user/${user?.id}`,
        {
          cart: [...user?.cart!, product.id]
        },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );

      toast({
        title: "Produto adicionado ao carrinho",
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "Erro ao adicionar produto ao carrinho",
        description: "Tente novamente mais tarde",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-fit">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="relative">
            {product.name}
            {parseInt(product.promotionPrice) > 1 ? (
              <span className="absolute -top-6 z-50 -right-10 bg-red-600 text-white px-2 py-1 rounded-sm origin-center rotate-45">
                {product.promotionPrice}%
              </span>
            ) : null}
          </CardTitle>
          <CardDescription>{product.type}</CardDescription>
        </CardHeader>
        <CardContent className="items-center flex flex-col">
          <Image
            className=""
            src={product.photo ? product.photo[0] : "/notFound.png"} // product.image
            alt="logo"
            priority
            width={150}
            height={150}
          />
          <p>{product.name}</p>
          <div className="text-justify">{product.type}</div>
        </CardContent>
        <CardFooter className="justify-center flex gap-2">
          <Link
            href={`/info/${product.id}`}
            className="rounded-sm bg-darkGreen px-4 py-2 text-white"
          >
            Ver mais
          </Link>
          <Button
            className="rounded-sm bg-blueGreen px-4 py-2 text-white"
            onClick={addToCart}
          >
            +
            <ShoppingCart size={24} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardsFunc;
