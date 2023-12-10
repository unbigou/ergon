"use client";

import CardsFunc from "@/components/mainPage/Card";
import useProducts from "@/context/useProducts";
import Carrousel from "./Carrousel";

export default function MainSection() {
  const { products, promotionProducts } = useProducts();

  return (
    <div className="w-full p-4 gap-10 flex flex-col">
      {promotionProducts?.length && promotionProducts?.length > 0 ? (
        <div className="shadow-2xl rounded-md bg-gray-200 p-4">
          <h1 className="text-center text-2xl font-bold text-black">
            Produtos em promoção
          </h1>
          <Carrousel
            slides={
              promotionProducts?.map((product) => (
                <CardsFunc key={product.id} product={product} />
              )) || []
            }
            options={{
              loop: true,
            }}
          />
        </div>
      ) : null}
      <div className="shadow-2xl rounded-md bg-gray-200 p-4">
        <h1 className="text-center text-2xl font-bold text-black">
          Produtos em destaque
        </h1>
        <Carrousel
          slides={
            products
              ? products.map((product) => (
                  <CardsFunc key={product.id} product={product} />
                ))
              : []
          }
          options={{
            loop: true,
          }}
        />
      </div>
    </div>
  );
}
