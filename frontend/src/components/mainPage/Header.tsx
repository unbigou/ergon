"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Search, ShoppingCart, User } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";

export default function Header() {
  const [hasSearch, setHasSearch] = useState(false);

  const [search, setSearch] = useState("");

  return (
    <header className="flex justify-between items-center w-full fixed py-4 bg-darkGreen px-60">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={150} height={150} />
      </div>
      <div className="flex w-1/3 justify-center items-center gap-4">
        <div
          className="flex items-center gap-2 text-white rounded-full p-2 hover:bg-blueGreen cursor-pointer"
          onClick={() => setHasSearch(true)}
        >
          <Search size={20} />
          <span
            className={`text-sm transition-all duration-1000 ease-in-out 
            ${!hasSearch ? "opacity-100" : "w-0 opacity-0"}
           `}
          >
            Pesquisar
          </span>
        </div>
        <Input
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`${
            hasSearch ? "opacity-100" : "w-0 opacity-0"
          } transition-all duration-1000 ease-in-out`}
          onBlur={() => setHasSearch(false)}
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
