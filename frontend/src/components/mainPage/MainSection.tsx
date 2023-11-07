"use client";

import CardsFunc from "@/components/mainPage/Card";
import useProducts from "@/context/useProducts";
import Carrousel from "./Carrousel";

export default function MainSection() {
  const { products } = useProducts();

  return (
    <div className="w-full bg-gray-100 shadow-xl p-4 gap-10 flex flex-col">
      <Carrousel
        slides={products.map((product) => (
          <CardsFunc key={product.id} product={product} />
        ))}
        options={{
          loop: true,
        }}
      />
    </div>
  );
}
