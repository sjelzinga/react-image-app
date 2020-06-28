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
  // const [page, setPage] = useState<number>(2);
  // const { data: listItems, error } = useFetchArray("/photos", page, true, {
  //   per_page: 10,
  // });

  console.log(listItems);

  // const increasePageNumber = () => {
  //   nextPage();
  // };

  // const nextPage = () => {
  //   // setPage((prev) => prev + 1);
  // };

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
