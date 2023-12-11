import api from "@/api/api";
import { ProductRes } from "@/utils/types";
import useSWR from "swr";

const fetcher = (url: string) =>
  api
    .get(url, {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    })
    .then((res) => res.data as ProductRes[]);

function useProducts() {
  const { data, error, isLoading } = useSWR(`/product`, fetcher);

  return {
    products: data,
    promotionProducts: data?.filter(
      (product) => parseFloat(product.promotionPrice) > 1
    ),
    productTypes: data?.map((product) => product.type).filter((type) => type),
    isLoading,
    isError: error,
  };
}

export default useProducts;
