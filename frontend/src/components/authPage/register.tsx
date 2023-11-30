`use client`;

import { z } from "zod";
import { Input } from "../ui/input";
import { registerSchema } from "@/utils/formSchemas";
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
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "../ui/use-toast";

const Register = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmEmail: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: z.infer<typeof registerSchema>) {
    const mailValidation = data.email === data.confirmEmail;
    const passwordValidation = data.password === data.confirmPassword;

    if (!mailValidation) {
      console.log(mailValidation);

      toast({
        title: "Erro",
        description: "Os emails não são iguais",
        variant: "destructive",
      });
    }

    if (!passwordValidation) {
      toast({
        title: "Erro",
        description: "As senhas não são iguais",
        variant: "destructive",
      });
    }

    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="justify-center flex text-xl font-semibold">
          Cadastre-se!
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
            name="confirmEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="shadow-md"
                    placeholder="Digite seu email novamente"
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar senha</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      className="shadow-md"
                      placeholder="Digite sua senha novamente"
                      type={seeConfirmPassword ? "text" : "password"}
                    />
                    <div className="absolute top-0 right-0">
                      <Button
                        className="p-2"
                        variant="ghost"
                        type="button"
                        onClick={() =>
                          setSeeConfirmPassword(!seeConfirmPassword)
                        }
                      >
                        {seeConfirmPassword ? <EyeOff /> : <Eye />}
                      </Button>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full mt-2 bg-darkGreen hover:bg-green-900"
            type="submit"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Register;
