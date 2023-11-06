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

export default function AdminPage() {
  const [nomeprod, setNomeprod] = useState("");
  const [precoprod, setPrecoprod] = useState("");
  const [tipoprod, setTipoprod] = useState("");
  const [formprod, setFormprod] = useState("");
  const [cultuprod, setCultuprod] = useState("");
  const [appprod, setAppprod] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  // function MyImageUploader() {

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    // if (file && file.type.startsWith("image/")) {
    //   setSelectedImage(URL.createObjectURL(e.target.files[0]));
    // } else {
    //   alert("Por favor, selecione um arquivo de imagem válido.");
    // }
  };
  // }

  return (
    <main className="flex w-full flex-col items-center justify-between px-60 py-24">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Cadastro de podutos</CardTitle>
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
              onChange={(e) => setNomeprod(e.target.value)}
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
              onChange={(e) => setPrecoprod(e.target.value)}
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
              onChange={(e) => setTipoprod(e.target.value)}
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
              onChange={(e) => setFormprod(e.target.value)}
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
              onChange={(e) => setCultuprod(e.target.value)}
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
              onChange={(e) => setAppprod(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button className="bg-darkGreen hover:bg-green-900">Salvar</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
