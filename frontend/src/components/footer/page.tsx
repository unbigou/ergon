"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useAuth from "@/context/useAuth";
import { Button } from "../ui/button";
import { Edit, Edit2, Edit2Icon } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import api from "@/api/api";

type data = {
  address: string;
  email: string;
  phoneNumber: string;
  id?: string;
};

export default function Footer() {
  const [edit, setEdit] = React.useState(false);
  const [data, setData] = React.useState<data>({
    address:
      "Via Rosalina Maria dos Santos, 1233 - Vila Carolo, Campo Mourão - PR, 87301-899",
    email: "paulo.2004@utfpr.edu.br",
    phoneNumber: "(44) 99999-9999",
  } as data);

  const { permission } = useAuth();

  const getData = async () => {
    try {
      const { data } = await api.get("/contactInfo", {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async () => {
    try {
      if (!data.id) {
        await api.post("/contactInfo", data, {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        });
      } else {
        await api.put(`/contactInfo/${data.id}`, data, {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        });
      }

      setEdit(!edit);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-darkGreen text-white py-4 mt-20 h-fit w-full flex flex-row justify-around items-center relative">
      <div className=" ">
        <Image src="/logo.svg" width={240} height={240} alt={""} />
      </div>
      <div className=" ">
        <Link href={`/dashboard`} className="text-xl font-extrabold">
          Inicio
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="font-extrabold text-xl pb-2">Endereço</h1>
        {edit ? (
          <Textarea
            placeholder="Endereço"
            className="bg-green-700 text-white border-green-900 placeholder:text-white"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        ) : (
          <p className="w-72 text-sm text-justify">{data.address}</p>
        )}
      </div>
      <div className="flex flex-col  justify-center">
        <h1 className="font-extrabold text-xl pb-2">Contato</h1>
        {edit ? (
          <div className="flex flex-col gap-2">
            <Input
              placeholder="Email"
              className="bg-green-700 text-white border-green-900 placeholder:text-white"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <Input
              placeholder="Telefone"
              className="bg-green-700 text-white border-green-900 placeholder:text-white"
              value={data.phoneNumber}
              onChange={(e) =>
                setData({ ...data, phoneNumber: e.target.value })
              }
            />
          </div>
        ) : (
          <div>
            <p className="text-sm ">{data.email}</p>
            <p className="text-sm ">{data.phoneNumber}</p>
          </div>
        )}
      </div>
      {permission === "admin" ? (
        <div className="absolute top-1/2 right-10 flex flex-col">
          {edit ? (
            <Button
              className="bg-green-900 text-white hover:bg-green-950"
              onClick={() => handleEdit()}
            >
              Salvar
            </Button>
          ) : (
            <Button
              className="bg-darkGreen text-white hover:bg-green-900"
              onClick={() => setEdit(!edit)}
            >
              <Edit size={24} />
            </Button>
          )}
        </div>
      ) : null}
    </div>
  );
}
