"use client";

import CardsFunc from "@/components/mainPage/Card";
import useProducts from "@/context/useProducts";

export default function FilteredProducts() {
  const { filteredProducts } = useProducts();

  return (
    <div className="items-center flex flex-col justify-center">
      <h1 className="text-4xl font-bold">Resultados da busca:</h1>
      <div className="bg-gray-100 shadow-xl p-4 gap-4 flex flex-wrap">
        {filteredProducts ? (
          filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <CardsFunc key={product.id} product={product} />
            ))
          ) : (
            <h1>Nenhum produto encontrado</h1>
          )
        ) : null}
      </div>
    </div>
  );
}
