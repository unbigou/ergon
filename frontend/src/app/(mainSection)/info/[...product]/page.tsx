"use client";

import ReviewSection from "@/components/product/reviewSection";
import { Button } from "@/components/ui/button";
import useUser from "@/context/useUser";
import { ProductRes } from "@/utils/types";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InfoPage({
  params,
}: {
  params: { product: string[] };
}) {
  const [product, setProduct] = useState<ProductRes | null>(null);
  const { users } = useUser();

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
    <main className="flex min-h-screen w-full items-center justify-between px-60 py-24 bg-gray-100">
      <div className="flex flex-col gap-20 w-full items-center h-full">
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
            <h1 className="font-bold text-gray-600 text-3xl">
              {product?.name}
            </h1>
            <div className="mt-4 flex flex-row items-center gap-2">
              <p className="text-lg">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  parseFloat(product?.promotionPrice || "0") > 1
                    ? parseFloat(product?.newPrice || "0")
                    : parseFloat(product?.price || "0")
                )}
                {parseFloat(product?.promotionPrice || "0") > 1 && (
                  <span className="text-sm text-gray-400 ml-2 line-through">
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(parseFloat(product?.price || "0"))}
                  </span>
                )}
              </p>
              <p className="text-sm"> à vista</p>
            </div>
            <p className="text-darkGreen font-semibold mt-10">Fomulação</p>
            <li className="text-sm ml-2">{product?.formulation}</li>
            <p className="text-darkGreen font-semibold mt-4">Culturas</p>
            {product?.cultures?.map((culture, index) => (
              <li className="text-sm ml-2" key={index}>
                {culture}
              </li>
            ))}
            <p className="text-darkGreen font-semibold mt-4">Aplicação</p>
            <li className="text-sm ml-2">{product?.aplication}</li>
            <Button className="bg-darkGreen hover:bg-green-900 mt-14">
              <Link
                href={`https://wa.me/${
                  users?.find((user) => user.id === product?.sellerId)
                    ?.phoneNumber
                }?text=Olá, gostaria de saber mais sobre o produto ${
                  product?.name
                }`}
                target="_blank"
                className="flex items-center gap-2"
              >
                <Phone size={16} className="mr-2" />
                Falar com o vendedor
              </Link>
            </Button>
          </div>
        </div>
        <ReviewSection productId={params.product[0]} />
      </div>
    </main>
  );
}
