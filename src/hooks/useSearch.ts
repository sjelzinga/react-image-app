import { useEffect, useState } from "react";
import { axiosClient } from "../services/UnsplashAPI";
import { AxiosResponse } from "axios";
import { PhotoObject } from "../types";

interface FetchObject {
  loading: boolean;
  data: PhotoObject[];
  error: boolean;
}

type FetchHook = (
  url: string,
  pageNumber: number,
  infinite: boolean,
  query: ""
) => FetchObject;

export const useSearch: FetchHook = (url, pageNumber, query) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<PhotoObject[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch();
  }, [pageNumber]);

  // console.log(pageNumber);

  const fetch = async (): Promise<void> => {
    setLoading(true);
    try {
      const { data }: AxiosResponse<any> = await axiosClient.get(url, {
        params: { page: pageNumber, query: query },
      });

      setData((prev) => {
        return [...prev, ...data];
      });

      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };

  return { loading, data, error };
};
