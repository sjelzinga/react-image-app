import { useEffect, useState } from "react";
import { axiosClient } from "../services/UnsplashAPI";
import { AxiosResponse } from "axios";
import { PhotoObject, SearchResponseType, Search } from "../types";

interface FetchObject {
  loading: boolean;
  // data: SearchResponseType | undefined;
  data: PhotoObject[];
  error: boolean;
}

type FetchHook = (
  url: string,
  pageNumber: number,
  searchObj: Search
) => FetchObject;

export const useSearch: FetchHook = (url, pageNumber, searchObj) => {
  const { query } = searchObj;
  const [loading, setLoading] = useState<boolean>(true);
  // const [data, setData] = useState<SearchResponseType>();
  const [data, setData] = useState<PhotoObject[]>([]);
  const [error, setError] = useState<boolean>(false);
  // const [URL, setURL] = useState();

  useEffect(() => {
    setData([]);
  }, [searchObj.query]);

  useEffect(() => {
    fetch();
  }, [pageNumber, searchObj.query]);

  const fetch = async (): Promise<void> => {
    setLoading(true);
    try {
      if (query.length > 0) {
        fetchSearchedPhotos();
      } else {
        fetchPhotos();
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };

  const fetchSearchedPhotos = async (): Promise<void> => {
    const { data }: AxiosResponse<SearchResponseType> = await axiosClient.get(
      url,
      {
        params: { page: pageNumber, per_page: 20, ...searchObj },
      }
    );

    setData((prev) => [...prev, ...data.results]);
  };

  const fetchPhotos = async (): Promise<void> => {
    const { data }: AxiosResponse<PhotoObject[]> = await axiosClient.get(
      "/photos",
      {
        params: { page: pageNumber, per_page: 20, ...searchObj },
      }
    );
    setData((prev) => [...prev, ...data]);
  };

  return { loading, data, error };
};
