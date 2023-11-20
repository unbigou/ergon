'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthPage() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginSenha, setLoginSenha] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupSenha1, setSignupSenha1] = useState('');
  const [signupSenha2, setSignupSenha2] = useState('');

  return (
    <main className="flex justify-center mt-44">
      <Tabs
        defaultValue="login"
        className="flex flex-col bg-slate-100 p-10 shadow-md"
      >
        <TabsList className="mb-3 w-80 bg-slate-200">
          <TabsTrigger value="login" className=" w-32 text-center">
            Entrar
          </TabsTrigger>
          <TabsTrigger value="signup" className="w-32">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <p className="justify-center flex text-xl font-semibold">
            Faça login!
          </p>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            className="mb-2 shadow-md"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          ></Input>
          <Label htmlFor="senha">Senha</Label>
          <Input
            id="senha"
            type="password"
            className="mb-6 shadow-md"
            value={loginSenha}
            onChange={(e) => setLoginSenha(e.target.value)}
          ></Input>
          <Button className="w-full bg-darkGreen hover:bg-green-900">
            Logar
          </Button>
        </TabsContent>
        <TabsContent value="signup">
          <p className="justify-center flex text-xl font-semibold">
            Cadastre-se!
          </p>
          <Label htmlFor="emailsignup">E-mail</Label>
          <Input
            id="emailsignup"
            className="mb-2 shadow-md"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          ></Input>
          <Label htmlFor="senha1">Senha</Label>
          <Input
            id="senha1"
            type="password"
            className="mb-2 shadow-md"
            value={signupSenha1}
            onChange={(e) => setSignupSenha1(e.target.value)}
          ></Input>
          <Label htmlFor="senha2">Confirmar senha</Label>
          <Input
            id="senha2"
            type="password"
            className="mb-5 shadow-md"
            value={signupSenha2}
            onChange={(e) => setSignupSenha2(e.target.value)}
          ></Input>
          <Button className="w-full bg-darkGreen hover:bg-green-900">
            Cadastrar
          </Button>
        </TabsContent>
      </Tabs>
    </main>
  );
}
