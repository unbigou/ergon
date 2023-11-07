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
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Cadastro de produtos</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col">
            <Label htmlFor="nomeprod" className="text-sm pb-1">
              Nome
            </Label>
            <Input
              type="text"
              id="nomeprod"
              placeholder="Ex: Bactérias"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.name}
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="precoprod" className="text-sm pb-1">
              Preço
            </Label>
            <Input
              type="text"
              id="precoprod"
              placeholder="Ex: R$ 10,00"
              onChange={(e) => setData({ ...data, price: e.target.value })}
              value={data.price}
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="tipoprod" className="text-sm pb-1">
              Tipo
            </Label>
            <Input
              type="text"
              id="tipoprod"
              placeholder="Ex: Bactérias"
              onChange={(e) => setData({ ...data, type: e.target.value })}
              value={data.type}
            />
          </div>
          <div>
            <Input type="file" accept="image/*" />
            {/* {selectedImage && (
                <img src={selectedImage} alt="Imagem selecionada" />
              )} */}
          </div>
          <div className="flex flex-col">
            <Label htmlFor="formprod" className="text-sm pb-1">
              Formula
            </Label>
            <Input
              type="text"
              id="formprod"
              placeholder="Ex: Líquida"
              onChange={(e) =>
                setData({ ...data, formulation: e.target.value })
              }
              value={data.formulation}
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="cultuprod" className="text-sm pb-1">
              Cultura
            </Label>
            <Input
              type="text"
              id="cultuprod"
              placeholder="Ex: Bacillus subtilis"
              onChange={(e) => setData({ ...data, cultures: e.target.value })}
              value={data.cultures}
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="appprod" className="text-sm pb-1">
              Aplicação
            </Label>
            <Input
              type="text"
              id="appprod"
              placeholder="Ex: Foliar"
              onChange={(e) => setData({ ...data, aplication: e.target.value })}
              value={data.aplication}
            />
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button
            onClick={handleSubmit}
            className="bg-darkGreen hover:bg-green-900"
          >
            Criar Produto
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
