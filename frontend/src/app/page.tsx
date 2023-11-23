"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/authPage/login";
import Register from "@/components/authPage/register";

export default function AuthPage() {
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
          <TabsTrigger value="signup" className="w-32">
            Criar conta
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="signup">
          <Register />
        </TabsContent>
      </Tabs>
    </main>
  );
}
