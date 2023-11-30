import api from "@/api/api";
import { userRes } from "@/utils/types";
import useSWR from "swr";

const fetcher = (url: string) =>
  api
    .get(url, {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    })
    .then((res) => res.data as userRes[]);

function useUser() {
  const { data, error, isLoading } = useSWR(`/user`, fetcher);

  return {
    users: data,
    isLoading,
    isError: error,
  };
}

export default useUser;
