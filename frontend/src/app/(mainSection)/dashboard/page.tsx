"use client";

import FilteredProducts from "@/components/mainPage/FilteredProducts";
import MainSection from "@/components/mainPage/MainSection";
import useFilterProducts from "@/context/useFilterProducts";
import useProducts from "@/context/useProducts";
import { useEffect } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { filteredProducts, setFilteredProducts } = useFilterProducts();
  const { products } = useProducts();

  useEffect(() => {
    searchParams.search
      ? setFilteredProducts(
          searchParams.search === ""
            ? false
            : products!.filter((product) =>
                product.name
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase()
                  .includes(
                    searchParams
                      .search!.toString()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .toLowerCase()
                  )
              )
        )
      : setFilteredProducts(false);
  }, [products, searchParams.search, setFilteredProducts]);

  return (
    <main className="flex min-h-screen w-full flex-col h-full items-center justify-between px-60 py-24">
      {!filteredProducts === false ? <FilteredProducts /> : <MainSection />}
    </main>
  );
}
