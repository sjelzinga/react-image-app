import { useEffect, useState } from "react";
import { axiosClient } from "../services/UnsplashAPI";
import { AxiosResponse } from "axios";
import { PhotoObject, SearchResponseType } from "../types";

interface FetchObject {
  loading: boolean;
  // data: SearchResponseType | undefined;
  data: PhotoObject[];
  error: boolean;
}

type FetchHook = (
  url: string,
  pageNumber: number,
  query: string
) => FetchObject;

export const useSearch: FetchHook = (url, pageNumber, query) => {
  const [loading, setLoading] = useState<boolean>(true);
  // const [data, setData] = useState<SearchResponseType>();
  const [data, setData] = useState<PhotoObject[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setData([]);
  }, [query]);

  useEffect(() => {
    fetch();
  }, [pageNumber, query]);

  const fetch = async (): Promise<void> => {
    setLoading(true);
    try {
      const { data }: AxiosResponse<SearchResponseType> = await axiosClient.get(
        url,
        {
          params: { page: pageNumber, query: query, per_page: 20 },
        }
      );

      setData((prev) => [...prev, ...data.results]);

      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };

  return { loading, data, error };
};
