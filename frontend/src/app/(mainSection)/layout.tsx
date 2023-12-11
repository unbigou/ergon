"use client";

import Navbar from "@/components/admin/navBar";
import Header from "@/components/mainPage/Header";
import useAuth from "@/context/useAuth";
import { useEffect } from "react";
import Footer from "../../components/footer/page";

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
    <section lang="en" className="h-screen">
      <Header />
      <div className="flex h-full">
        {permission === "admin" ? <Navbar /> : null}
        <div className="overflow-y-auto w-full bg-gray-100 justify-between flex flex-col">
          {children}
          <Footer />
        </div>
      </div>
    </section>
  );
}
