`use client`;

import { Minus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Button } from "../ui/button";
import useAuth from "@/context/useAuth";
import useProducts from "@/context/useProducts";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import api from "@/api/api";
import { useToast } from "../ui/use-toast";
import Link from "next/link";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const { products } = useProducts();
  const { toast } = useToast();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleDelete = async (id: string) => {
    const newCart = user?.cart?.filter((productId) => productId !== id);
    try {
      await api.put(
        `/user/${user?.id}`,
        { cart: newCart },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );

      toast({
        title: "Produto removido do carrinho",
        duration: 2000,
      });
    } catch (err) {
      console.log(err);

      toast({
        title: "Erro ao remover produto do carrinho",
        duration: 2000,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Button
        variant={"outline"}
        onClick={toggleDrawer}
        className="flex gap-4 border border-blueGreen"
      >
        <ShoppingCart size={24} />
        Carrinho
      </Button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className=""
      >
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-xl font-semibold">Carrinho</h1>
          <ScrollArea className="max-h-[45rem] h-screen">
            {user?.cart?.length === 0 ? (
              <h1 className="text-lg font-semibold">Seu carrinho está vazio</h1>
            ) : null}
            <div className="flex flex-col gap-4">
              {products
                ?.filter((product) => user?.cart?.includes(product.id))
                .map((product, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 border p-4 rounded-md "
                  >
                    <Image
                      src={product.photo[0]}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="rounded-md w-full"
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col gap-2">
                        <h1 className="text-lg font-semibold">
                          {product.name}
                        </h1>
                        <h1 className="text-lg font-semibold">
                          R${`  `}
                          {parseFloat(product.promotionPrice) > 1
                            ? product.newPrice
                            : product.price}
                        </h1>
                      </div>
                      <div>
                        <Button
                          variant="outline"
                          onClick={() => handleDelete(product.id)}
                        >
                          <Minus size={24} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </ScrollArea>
          <div className="flex flex-col gap-4 justify-end">
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">Total:</h1>
              <h1 className="text-lg font-semibold">
                R${`  `}
                {products
                  ?.filter((product) => user?.cart?.includes(product.id))
                  .reduce((acc, product) => {
                    if (parseFloat(product.promotionPrice) > 1) {
                      return acc + parseFloat(product.newPrice);
                    } else {
                      return acc + parseFloat(product.price);
                    }
                  }, 0)}
              </h1>
            </div>
            <Button variant="outline">
              <Link
                href={`https://wa.me/44997332088?text=Olá, gostaria de comprar os seguintes produtos: ${products
                  ?.filter((product) => user?.cart?.includes(product.id))
                  .map((product) => product.name)}`}
                target="_blank"
                className="flex items-center gap-2"
              >
                Falar com o vendedor
              </Link>
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;
