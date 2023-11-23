"use client";

import useProducts from "@/context/useProducts";
import EditCard from "./editCard";


const ProductList = () => {
  const { products } = useProducts();

  return (
    <div className="flex gap-4 flex-nowrap overflow-x-auto w-full h-full">
      {products?.map((product) => (
        <EditCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
