"use client";

import ImageZoom from "@/components/Product/ProductImage";
import { Button } from "@/components/ui/button";
import { ProductRes } from "@/utils/types";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <main className="flex min-h-screen w-full flex-col items-center justify-between px-60 py-24">
      <div className="flex flex-row mt-20">
        <div className="">
          <ImageZoom/>
        </div>
        <div className="flex flex-col ml-24">
          <h1 className="semi-bold text-2xl">{product?.name}</h1>
          <div className="mt-20 flex flex-row items-center gap-2">
            <p className="text-lg">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(parseFloat(product?.price || "0"))}
            </p>
            <p className="text-sm"> à vista</p>
          </div>
          <p className="text-sm">{product?.formulation}</p>
          <p className="text-sm">{product?.cultures}</p>
          <p className="text-sm">{product?.aplication}</p>
          <Button className="bg-darkGreen hover:bg-green-900 mt-14">
            Falar com o vendedor
          </Button>
        </div>
      </div>
    </main>
  );
}
