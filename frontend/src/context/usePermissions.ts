import api from "@/api/api";
import { PermissionRes } from "@/utils/types";
import useSWR from "swr";

const fetcher = (url: string) =>
  api
    .get(url, {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    })
    .then((res) => res.data as PermissionRes[]);

function usePermissions() {
  const { data, error, isLoading } = useSWR(`/permission`, fetcher);

  return {
    permissions: data,
    isLoading,
    isError: error,
  };
}

export default usePermissions;
