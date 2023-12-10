import api from "@/api/api";
import { ProductRes, ReviewRes } from "@/utils/types";
import useSWR from "swr";

const fetcher = (url: string) =>
  api
    .get(url, {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    })
    .then((res) => res.data as ReviewRes[]);

function useReviews(productId: string) {
  const { data, error, isLoading } = useSWR(
    `/review/product/${productId}`,
    fetcher
    );
    console.log("productId", data);

  return {
    reviews: data,
    isLoading,
    isError: error,
  };
}

export default useReviews;
