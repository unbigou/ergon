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
import { XIcon } from "lucide-react";
import { useState } from "react";

export default function ProductForm() {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: "" as any,
      type: "",
      formulation: "",
      cultures: [],
      application: "",
    },
  });

  const onSubmit = (values: z.infer<typeof productSchema>) => {
    console.log( "kadkas");
  };

  const [culture, setCulture] = useState("");

  // const handleImageChange = (e: any) => {
  //   const file = e.target.files[0];
  //   // if (file && file.type.startsWith("image/")) {
  //   //   setSelectedImage(URL.createObjectURL(e.target.files[0]));
  //   // } else {
  //   //   alert("Por favor, selecione um arquivo de imagem válido.");
  //   // }
  // };

  // const handleSubmit = async () => {
  //   const res = {
  //     ...data,
  //     photo: "any",
  //   };
  //   await fetch("http://localhost:3333/product", {
  //     method: "POST",
  //     headers: {
  //       "x-api-key": "YOUR_API_KEY",
  //     },
  //     body: JSON.stringify(res),
  //   });
  // };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-xl"
      >
        <div className="flex justify-between gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: NemaBioControl" {...field} />
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
          />
        </div>
        <div className="flex justify-between gap-4  ">
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
        </div>
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
                      placeholder="Ex: Bacillus subtilis"
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
        <div>
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
        </div>
        <Button type="submit"
          onClick={() => console.log(form.getValues())}
        className="bg-darkGreen hover:bg-green-900">
          Submit
        </Button>
      </form>
    </Form>
  );
}
