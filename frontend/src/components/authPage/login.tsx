"use client";

import { z } from "zod";
import { Input } from "../ui/input";
import { loginSchema } from "@/utils/formSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { EyeOff, Eye, Loader2 } from "lucide-react";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { authRes } from "@/utils/types";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login, setUser } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, []);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoading(true);
    const res: authRes | undefined = await login(values);
    if (res) {
      toast({
        title: "Login realizado com sucesso",
        description: "Você será redirecionado para a página principal",
      });
      setUser(res.data.user);
      router.push("/dashboard");
    } else {
      setLoading(false);
      toast({
        title: "Erro ao realizar login",
        description: "Verifique suas credenciais e tente novamente",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="justify-center flex text-xl font-semibold">
          Faça login!
        </h1>
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="shadow-md"
                    placeholder="Digite seu email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      className="shadow-md"
                      placeholder="Digite sua senha"
                      type={seePassword ? "text" : "password"}
                    />
                    <div className="absolute top-0 right-0">
                      <Button
                        className="p-2"
                        variant="ghost"
                        type="button"
                        onClick={() => setSeePassword(!seePassword)}
                      >
                        {seePassword ? <EyeOff /> : <Eye />}
                      </Button>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full mt-2 bg-darkGreen hover:bg-green-900 gap-2"
            type="submit"
            disabled={loading}
          >
            <Loader2
              className={`animate-spin ${loading ? "block" : "hidden"}`}
            />
            Entrar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Login;
