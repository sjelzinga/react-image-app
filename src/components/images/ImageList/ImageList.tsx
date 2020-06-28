import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { useFetchArray } from "hooks/useFetchArray";
import ImageCard from "components/images/ImageCard/ImageCard";
import "./ImageList.css";
import { PhotoObject } from "types";

interface IProps {
  nextPage: () => void;
  listItems: PhotoObject[];
}

export const ImageList: React.FC<IProps> = (props) => {
  const { nextPage, listItems } = props;

  const photos = listItems
    ? listItems.map((photoObj) => (
        <ImageCard key={photoObj.id} image={photoObj} />
      ))
    : [];

  return (
    <InfiniteScroll
      className="image-list"
      next={nextPage}
      hasMore={true}
      loader={<h4>Loading.....</h4>}
      dataLength={listItems.length}
    >
      {photos}
    </InfiniteScroll>
  );
};
