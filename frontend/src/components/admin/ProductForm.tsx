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
import { useEffect, useState } from "react";
import Image from "next/image";
import { imgUpload } from "@/utils/imgUpload";
import api from "@/api/api";
import useEditProduct from "@/context/editProduct";
import { ScrollArea } from "../ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import useUser from "@/context/useUser";
import usePermissions from "@/context/usePermissions";
import { useToast } from "../ui/use-toast";
import { ProductReq, ProductRes } from "@/utils/types";

type sellerSelect = {
  name: string;
  id: string;
};

export default function ProductForm() {
  const { product, setDialog, setProduct } = useEditProduct();
  const { users } = useUser();
  const { permissions } = usePermissions();
  const { toast } = useToast();

  const [sellerArr, setSellerArr] = useState<sellerSelect[]>([]);
  const [seller, setSeller] = useState("");

  useEffect(() => {
    if (product) {
      const user = users?.find((user) => user.id === product.sellerId);
      setSeller(user?.name || "");
    }
  }, [product, users]);

  useEffect(() => {
    const sellers = users?.filter((user) =>
      permissions?.find(
        (permission) =>
          permission.id === user.permissionId && permission.name === "seller"
      )
    );
    setSellerArr(
      sellers?.map((seller) => ({ name: seller.name, id: seller.id })) || []
    );
  }, [users, permissions]);

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
      sellerId: product ? product?.sellerId || "" : "",
      promotionPrice: parseFloat(
        product
          ? parseFloat(product?.promotionPrice || "0") > 1
            ? product?.promotionPrice || "0"
            : "0"
          : "0"
      ),
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
    setProduct(false);
  }

  async function onSubmit(values: z.infer<typeof productSchema>) {
    setLoading(true);
    const link = await imgUpload(values.file as File[]);
    const req = {
      name: values.name || "",
      price: values.price.toString() || "",
      type: values.type || "",
      photo: link || [""],
      formulation: values.formulation || "",
      cultures: values.cultures || [""],
      aplication: values.application || "",
      sellerId: values.sellerId || "",
      newPrice: "",
      promotionPrice: values.promotionPrice?.toString() || "1",
      stock: values.stock,
    } as ProductReq;
    try {
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

      toast({
        title: "Sucesso",
        description: "Produto cadastrado com sucesso",
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao cadastrar o produto",
        variant: "destructive",
      });
    }
    setLoading(false);
    setDialog(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
        <ScrollArea className="h-[45rem] text-black">
          <div className="p-2 gap-8 flex flex-col">
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
            <div className="flex justify-between gap-10 items-center">
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
                              setImgUrl(
                                URL.createObjectURL(e.target.files![0])
                              );
                              field.onChange([
                                ...Object.values(e.target.files!),
                              ]);
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
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estoque</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value === "true");
                        }}
                      >
                        <FormControl>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Selecione uma opção" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="true">Sim</SelectItem>
                          <SelectItem value="false">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      O produto está disponível no estoque?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="sellerId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vendedor responsável pelo produto</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Selecione um vendedor" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {sellerArr?.map((seller, index) => (
                          <SelectItem key={index} value={seller.id}>
                            {seller.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Selecione o vendedor que será responsável pelo produto.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="promotionPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço promocional</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: 10%"
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e.target.valueAsNumber);
                        }}
                        type="number"
                      />
                    </FormControl>
                    <FormDescription>
                      Preço promocional do produto (opcional) em %.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
