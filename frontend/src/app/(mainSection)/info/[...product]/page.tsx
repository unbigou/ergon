"use client";

import { Button } from "@/components/ui/button";
import { ProductRes } from "@/utils/types";
import Image from "next/image";
import { useEffect, useState } from "react";

// const product = {
//   id: "95",
//   name: "Bactérias",
//   price: "R$ 10,00",
//   type: "Bactérias",
//   photo: "/mambore.png",
//   formulation: "Líquida",
//   cultures: "Bacillus subtilis",
//   aplication: "Foliar",
// };

export default function InfoPage({
  params,
}: {
  params: { product: string[] };
}) {
  const [product, setProduct] = useState<ProductRes | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      fetch(`http://localhost:3333/product/${params.product[0]}`, {
        method: "GET",
        headers: {
          "x-api-key": "YOUR_API_KEY",
        },
      })
        .then((res) => res.json())
        .then((data) => setProduct(data));
    };
    fetchProduct();
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between px-60 py-24 bg-gray-100">
      <div className="flex flex-row mt-20">
        <div className="flex bg-white p-20">
          <Image
            src={product?.photo ? product?.photo[0] : "/notFound.png"}
            alt="logo"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col ml-36">
          <h1 className="font-bold text-gray-600 text-3xl">{product?.name}</h1>
          <div className="mt-4 flex flex-row items-center gap-2">
            <p className="text-lg">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(parseFloat(product?.price || "0"))}
            </p>
            <p className="text-sm"> à vista</p>
          </div>
          <p className="text-darkGreen font-semibold mt-10">Fomulação</p>
          <li className="text-sm ml-2">{product?.formulation}</li> 
          <p className="text-darkGreen font-semibold mt-4">Culturas</p>
             {
               product?.cultures?.map((culture, index) => (
                <li className="text-sm ml-2" key={index}>{culture}</li>
              ))
             }
          <p className="text-darkGreen font-semibold mt-4">Aplicação</p>
           <li className="text-sm ml-2">{product?.aplication}</li>
          <Button className="bg-darkGreen hover:bg-green-900 mt-14">
            Falar com o vendedor
          </Button>
        </div>
      </div>
    </main>
  );
}
