import { useEffect, useState } from "react";
import { axiosClient } from "../services/UnsplashAPI";
import { AxiosResponse } from "axios";

interface FetchObject<T> {
  loading: boolean;
  data: T | undefined;
  error: boolean;
}

type FetchHook = <T>(url: string, params?: {}) => FetchObject<T>;

export const useFetch: FetchHook = (url, params) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch();
  }, []);

  const fetch = async (): Promise<void> => {
    try {
      const { data }: AxiosResponse<any> = await axiosClient.get(url, {
        params: params,
      });
      console.log(data);
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return { loading, data, error };
};
