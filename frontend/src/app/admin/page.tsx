import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";


export default function Home() {
const [nomeprod, setNomeprod] = useState('');
const [precoprod, setPrecoprod] = useState('');
const [tipoprod, setTipoprod] = useState('');
const [formprod, setFormprod] = useState('');
const [cultuprod, setCultuprod] = useState('');
const [appprod, setAppprod] = useState('');

function MyImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith('image/')) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
      
    } else {
      alert('Por favor, selecione um arquivo de imagem válido.');
    }
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between px-60 py-24">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Cadastro de podutos</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <label htmlFor="nomeprod" className="text-sm pb-1">
              Nome
            </label>
            <input
              type="text"
              id="nomeprod"
              className="border-2 rounded-md h-8 mb-5"
              placeholder="Ex: Bactérias"
              onChange={(e) => setNomeprod(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="precoprod" className="text-sm pb-1">
              Preço
            </label>
            <input
              type="text"
              id="precoprod"
              className="border-2 rounded-md h-8 mb-5"
              placeholder="Ex: R$ 10,00"
              onChange={(e) => setPrecoprod(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="tipoprod" className="text-sm pb-1">
              Tipo
            </label>
            <input
              type="text"
              id="tipoprod"
              className="border-2 rounded-md h-8 mb-5"
              placeholder="Ex: Bactérias"
              onChange={(e) => setTipoprod(e.target.value)}
            />
          </div>
          <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {selectedImage && (
              <img src={selectedImage} alt="Imagem selecionada" />
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="formprod" className="text-sm pb-1">
              Formula
            </label>
            <input
              type="text"
              id="formprod"
              className="border-2 rounded-md h-8 mb-5"
              placeholder="Ex: Líquida"
              onChange={(e) => setFormprod(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cultuprod" className="text-sm pb-1">
              Cultura
            </label>
            <input
              type="text"
              id="cultuprod"
              className="border-2 rounded-md h-8 mb-5"
              placeholder="Ex: Bacillus subtilis"
              onChange={(e) => setCultuprod(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="appprod" className="text-sm pb-1">
              Aplicação
            </label>
            <input
              type="text"
              id="appprod"
              className="border-2 rounded-md h-8 mb-5"
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
