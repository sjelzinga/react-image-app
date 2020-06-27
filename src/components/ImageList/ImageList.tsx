import React, { useState, createRef, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { useFetchArray } from "../../hooks/useFetchArray";
import { PhotoObject } from "../../types";
import { ImageCard } from "../ImageCard/ImageCard";
import { axiosClient } from "../../services/UnsplashAPI";
import { AxiosResponse } from "axios";
// import "./ImageList.css";

export const ImageList = () => {
  const [page, setPage] = useState<number>(2);
  const { loading, data, error } = useFetchArray("/photos", page, true, {
    per_page: 3,
  });
  // const [images, setImages] = useState<PhotoObject[]>([]);

  const increasePageNumber = () => {
    console.log("in");
    setPage((prev) => prev + 1);
  };

  // useEffect(() => {
  //   fetchData();
  // }, [page]);

  // const fetchData = () => {
  //   axiosClient
  //     .get("/photos?per_page=10", { params: { page } })
  //     .then((res: AxiosResponse<PhotoObject[]>) =>
  //       setImages((prev) => [...prev, ...res.data])
  //     );
  // };

  // if (loading) {
  //   return <h4>Loading</h4>;
  // } else if (error) {
  //   return <h4>Something went wrong</h4>;
  // }

  const photos = data
    ? data.map((photoObj) => <ImageCard key={photoObj.id} image={photoObj} />)
    : [];

  return (
    <div className="image-list">
      <InfiniteScroll
        next={increasePageNumber}
        hasMore={true}
        loader={<h4>Loading.....</h4>}
        dataLength={data.length}
      >
        {photos}
      </InfiniteScroll>
    </div>
  );
};
