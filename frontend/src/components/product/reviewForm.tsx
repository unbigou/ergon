"use client";

import { reviewSchema } from "@/utils/formSchemas";
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
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import useAuth from "@/context/useAuth";
import StarSelect from "./starSelect";
import { Button } from "../ui/button";
import api from "@/api/api";

type ProductFormProps = {
  productId: string;
  setDialog: (openDialog: boolean) => void;
};

export default function ReviewForm({ productId, setDialog }: ProductFormProps) {
  const { user } = useAuth();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),

    defaultValues: {
      comentary: "",
      productId: productId,
      rating: "0",
      userId: user?.id || "",
    },
  });

  async function onSubmit(values: z.infer<typeof reviewSchema>) {
    setLoading(true);
    try {
      await api.post("/review", values, {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      toast({
        title: "Sucesso",
        description: "Avaliação cadastrada com sucesso",
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Erro",
        description: "Erro ao cadastrar avaliação",
        variant: "destructive",
      });
    }
    setLoading(false);
    setDialog(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
        <div className="flex flex-col gap-8">
          <FormField
            control={form.control}
            name="comentary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comentário</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Digite o comentário"
                    className="w-full"
                  />
                </FormControl>
                <FormDescription>
                  Digite o comentário sobre o produto
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nota</FormLabel>
                <FormControl>
                  <StarSelect handleStarChange={field.onChange} />
                </FormControl>
                <FormDescription>
                  Clique nas estrelas para avaliar o produto
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="bg-darkGreen hover:bg-green-900">
            {loading ? "Carregando..." : "Avaliar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
