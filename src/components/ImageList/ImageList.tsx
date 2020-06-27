import React, { useState, createRef, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { useFetchArray } from "../../hooks/useFetchArray";
import { ImageCard } from "../ImageCard/ImageCard";
import "./ImageList.css";

export const ImageList = () => {
  const [page, setPage] = useState<number>(2);
  const { data, error } = useFetchArray("/photos", page, true, {
    per_page: 10,
  });

  const increasePageNumber = () => {
    console.log("in");
    setPage((prev) => prev + 1);
  };

  const photos = data
    ? data.map((photoObj) => <ImageCard key={photoObj.id} image={photoObj} />)
    : [];

  return (
    <InfiniteScroll
      className="image-list"
      next={increasePageNumber}
      hasMore={true}
      loader={<h4>Loading.....</h4>}
      dataLength={data.length}
    >
      {photos}
    </InfiniteScroll>
  );
};
