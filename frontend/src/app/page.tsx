import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthPage() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Tabs defaultValue="login" className="flex flex-col bg-slate-100 p-10 shadow-md">
        <TabsList className="mb-3 w-80">
          <TabsTrigger value="login" className="justify-between flex" >Entrar</TabsTrigger>
          <TabsTrigger value="sign un">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <p className="justify-center flex text-xl font-semibold">Faça login!</p>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" className="mb-2"></Input>
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" className="mb-6"></Input>
          <Button className="w-full">Logar</Button>
        </TabsContent>
        <TabsContent value="sign un">
          <Label htmlFor="emailsingup">E-mail</Label>
          <Input id="emailsignup" className="mb-2"></Input>
          <Label htmlFor="senha1">Senha</Label>
          <Input id="senha1" className="mb-2"></Input>
          <Label htmlFor="senha2">Confirmar senha</Label>
          <Input id="senha2" className="mb-5"></Input>
          <Button className="w-full"></Button>
          </TabsContent>
      </Tabs>
    </main>
  );
}
