"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { productSchema } from "@/utils/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { FileUp, Loader2, XIcon } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { imgUpload } from "@/utils/imgUpload";
import api from "@/api/api";
import useEditProduct from "@/context/editProduct";
import { ScrollArea } from "../ui/scroll-area";

export default function ProductForm() {
  const { product, setDialog } = useEditProduct();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),

    defaultValues: {
      name: product ? product?.name || "" : "",
      application: product ? product?.aplication || "" : "",
      cultures: product ? product?.cultures || [] : [],
      file: product ? product?.photo || [] : "",
      formulation: product ? product?.formulation || "" : "",
      price: parseFloat(product ? product?.price.toString() || "0" : "0"),
      type: product ? product?.type || "" : "",
    },
  });

  const [culture, setCulture] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  async function handleDelete() {
    setLoading(true);
    await api.delete(`/product/${product && product.id}`, {
      headers: {
        "x-api-key": "YOUR_API_KEY",
      },
    });
    setLoading(false);
    setDialog(false);
  }

  async function onSubmit(values: z.infer<typeof productSchema>) {
    setLoading(true);
    const link = await imgUpload(values.file as File[]);
    const req = {
      name: values.name || "teste",
      price: values.price.toString() || "teste",
      type: values.type || "teste",
      photo: link || ["teste"],
      formulation: values.formulation || "teste",
      cultures: values.cultures || ["teste"],
      aplication: values.application || "teste",
    };

    product
      ? await api.put(`/product/${product.id}`, req, {
          headers: {
            "x-api-key": "YOUR_API_KEY",
          },
        })
      : await api.post("/product", req, {
          headers: {
            "x-api-key": "YOUR_API_KEY",
          },
        });
    setLoading(false);
    setDialog(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
        <ScrollArea className="h-[45rem] text-black">
          <div className="p-2">
            <div className="flex w-[40rem] justify-between gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: NemaBioControl"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Nome do produto que será cadastrado.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: R$ 10,00"
                        value={field.value.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                        onChange={(e) =>
                          field.onChange(
                            Number(e.target.value.replace(/\D/g, "")) / 100
                          )
                        }
                      />
                    </FormControl>
                    <FormDescription>
                      Preço do produto que será cadastrado.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Fertilizante" {...field} />
                    </FormControl>
                    <FormDescription>
                      Tipo do produto que será cadastrado.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="formulation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Formulação</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Purpureocillium lilacinum na concentração de 1x10¹¹ conídios/mL."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Nome do produto que será cadastrado.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cultures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Culturas</FormLabel>
                  <FormControl>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-4">
                        <Input
                          placeholder="Ex: soja, milho, trigo, etc."
                          value={culture}
                          onChange={(e) => setCulture(e.target.value)}
                        />
                        <Button
                          onClick={() => {
                            field.onChange([...field.value, culture]);
                            setCulture("");
                          }}
                          type="button"
                        >
                          Adicionar
                        </Button>
                      </div>
                      <div className="flex gap-2 flex-wrap border min-h-40 p-1 rounded-md">
                        {field.value.map((culture, index) => (
                          <div
                            className=" cursor-pointer bg-gray-100 border border-gray-300 rounded-md px-2 py-1 flex items-center text-center hover:bg-gray-200"
                            key={index}
                            onClick={() => {
                              field.onChange([
                                ...field.value.filter((_, i) => i !== index),
                              ]);
                            }}
                          >
                            {culture}
                            <span className="ml-2">
                              <XIcon size={14} />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FormControl>
                  <FormDescription>
                    Adicione as tags de culturas que serão cadastradas.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="application"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aplicação</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Pulverização na parte aérea da cultura."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Modo de aplicação do produto que será cadastrado.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagem do produto</FormLabel>
                  <FormControl>
                    <div className="w-96 m-auto p-8 bg-white rounded-lg shadow-lg">
                      <div className="text-center flex flex-col items-center border-dashed border-2 border-gray-300 p-4 relative">
                        {imgUrl ? (
                          <Image
                            src={imgUrl}
                            alt="logo"
                            width={150}
                            height={150}
                          />
                        ) : (
                          <FileUp
                            className={`w-16 h-16 ${
                              field.value ? "text-green-600" : "text-gray-500"
                            }`}
                          />
                        )}
                        <Input
                          className="block w-full h-full absolute top-0 left-0 bottom-0 right-0 opacity-0 cursor-pointer"
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            setImgUrl(URL.createObjectURL(e.target.files![0]));
                            field.onChange([...Object.values(e.target.files!)]);
                          }}
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormDescription>
                    Imagem do produto que será cadastrado.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full items-center justify-between">
              <Button
                type="button"
                className={`bg-red-500 hover:bg-red-600 mt-8 ${
                  loading ? "cursor-not-allowed opacity-50" : ""
                }`}
                onClick={handleDelete}
              >
                <Loader2
                  className={`w-6 h-6 mr-2 animate-spin ${
                    loading ? "inline-block" : "hidden"
                  }`}
                />
                Excluir produto
              </Button>
              <Button
                type="submit"
                className={`bg-darkGreen hover:bg-green-900 mt-8 ${
                  loading ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                <Loader2
                  className={`w-6 h-6 mr-2 animate-spin ${
                    loading ? "inline-block" : "hidden"
                  }`}
                />
                {product ? "Atualizar produto" : "Cadastrar produto"}
              </Button>
            </div>
          </div>
        </ScrollArea>
      </form>
    </Form>
  );
}
