import { useEffect, useState } from "react";
import { axiosClient } from "../services/UnsplashAPI";
import { AxiosResponse } from "axios";

interface FetchObject<T> {
  loading: boolean;
  data: T | null;
  error: boolean;
}

type FetchHook = <T>(
  url: string,
  pageNumber: number,
  params?: {}
) => FetchObject<T>;

export const useFetch: FetchHook = (url, pageNumber, params) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch();
  }, [pageNumber]);

  // console.log(params); // {page: 6}

  const fetch = async (): Promise<void> => {
    setLoading(true);
    try {
      const { data }: AxiosResponse<any> = await axiosClient.get(url, {
        params: { page: pageNumber, ...params },
      });
      setData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };

  return { loading, data, error };
};
