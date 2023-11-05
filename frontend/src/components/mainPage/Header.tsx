"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Search, ShoppingCart, User } from "lucide-react";
import { Input } from "../ui/input";
import useProducts from "@/context/useProducts";

export default function Header() {
  const { products, setFilteredProducts } = useProducts();

  return (
    <header className="flex justify-between items-center w-full fixed z-10 py-4 bg-darkGreen px-60">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={150} height={150} />
      </div>
      <div className="flex w-1/3 justify-center items-center gap-4">
        <Search size={24} className="text-white" />
        <Input
          placeholder="Pesquisar"
          onChange={(e) => {
            setFilteredProducts(
              e.target.value === ""
                ? false
                : products.filter((product) =>
                    product.name
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .toLowerCase()
                      .includes(
                        e.target.value
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .toLowerCase()
                      )
                  )
            );
          }}
        />
      </div>
      <div className="flex items-center gap-4">
        <Button className="hover:bg-blueGreen bg-inherit">
          <User size={24} />
          Login
        </Button>
        <Button
          variant={"outline"}
          className="flex gap-4 border border-blueGreen"
        >
          <ShoppingCart size={24} />
          Carrinho
        </Button>
      </div>
    </header>
  );
}
