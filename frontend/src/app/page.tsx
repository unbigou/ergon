"use client";

import FilteredProducts from "@/components/mainPage/FilteredProducts";
import MainSection from "@/components/mainPage/MainSection";
import useProducts from "@/context/useProducts";

export default function Home() {
  const { filteredProducts } = useProducts();

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
      {!filteredProducts === false ? <FilteredProducts /> : <MainSection />}
    </main>
  );
}
