"use client";

import useProducts from "@/context/useProducts";
import EditCard from "./editCard";
import useAuth from "@/context/useAuth";
import { useEffect } from "react";

const ProductList = () => {
  const { products } = useProducts();
  const { getUser, permission } = useAuth();

  useEffect(() => {
    getUser();

    if (permission !== "admin") {
      window.location.href = "/dashboard";
    }
  }, []);

  return (
    <div className="flex gap-4 flex-nowrap overflow-x-auto w-full h-max">
      {products?.map((product) => (
        <EditCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
