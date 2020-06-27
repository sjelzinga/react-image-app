import React, { useState, createRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { PhotoObject } from "../../types";
import { ImageCard } from "../ImageCard/ImageCard";

export const ImageList = () => {
  const [page, setPage] = useState<number>(1);
  const { loading, data, error } = useFetch<PhotoObject[]>("/photos", {
    page: 6,
  });

  const increasePageNumber = () => {
    setPage((prev) => prev + 1);
  };

  const photos =
    data &&
    data.map((photoObj) => (
      <ImageCard image={photoObj} onLoadMore={increasePageNumber} />
    ));

  return <div className="image-list">{photos}</div>;
};
