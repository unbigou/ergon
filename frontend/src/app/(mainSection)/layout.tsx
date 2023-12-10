"use client";

import Navbar from "@/components/admin/navBar";
import Header from "@/components/mainPage/Header";
import useAuth from "@/context/useAuth";
import { useEffect } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUser, permission } = useAuth();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section lang="en" className="">
      <Header />
      <div className="flex h-screen">
        {permission === "admin" ? <Navbar /> : null}
        <div className="overflow-y-auto w-full bg-gray-100">{children}</div>
      </div>
    </section>
  );
}
