"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ProductReq } from "@/utils/types";
import ProductForm from "@/components/admin/ProductForm";

export default function AdminPage() {
  const [data, setData] = useState<ProductReq>({} as ProductReq);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    // if (file && file.type.startsWith("image/")) {
    //   setSelectedImage(URL.createObjectURL(e.target.files[0]));
    // } else {
    //   alert("Por favor, selecione um arquivo de imagem válido.");
    // }
  };

  const handleSubmit = async () => {
    console.log();
    const res = {
      ...data,
      photo: "any",
    };
    await fetch("http://localhost:3333/product", {
      method: "POST",
      headers: {
        "x-api-key": "YOUR_API_KEY",
      },
      body: JSON.stringify(res),
    });
  };

  return (
    <main className="flex w-full flex-col items-center justify-between px-60 py-24">
      <ProductForm />
    </main>
  );
}
