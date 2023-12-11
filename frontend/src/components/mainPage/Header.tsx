"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Search, ShoppingCart, User } from "lucide-react";
import { Input } from "../ui/input";
import useFilterProducts from "@/context/useFilterProducts";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useProducts from "@/context/useProducts";
import useAuth from "@/context/useAuth";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const [search, setSearch] = useState("");
  const [token, setToken] = useState("");
  const { setFilteredProducts } = useFilterProducts();
  const { products } = useProducts();
  const { logout } = useAuth();

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/?search=${search}`);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setToken(token!);
    }
  }, []);

  return (
    <header className="flex justify-between items-center w-full fixed z-20 py-4 bg-darkGreen px-60">
      <Link className="flex items-center" href={"/dashboard"}>
        <Image src="/logo.svg" alt="logo" width={150} height={150} priority />
      </Link>
      <div className="flex w-1/3 justify-center items-center gap-4">
        <Search size={24} className="text-white" />
        <form onSubmit={handleSubmit} className="w-full">
          <Input
            id="search"
            placeholder="Pesquisar"
            autoComplete="on"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setFilteredProducts(
                e.target.value === ""
                  ? false
                  : products!.filter((product) =>
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
        </form>
      </div>
      <div className="flex items-center gap-4">
        {token ? (
          <Button
            variant={"ghost"}
            className=" hover:bg-blueGreen text-white bg-inherit flex gap-4"
            onClick={() => {
              logout();
              setToken("");
              router.refresh();
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            className="hover:bg-blueGreen bg-inherit"
            onClick={() => router.push("/")}
          >
            <User size={24} />
            Login
          </Button>
        )}
        <CartDrawer />
      </div>
    </header>
  );
}
