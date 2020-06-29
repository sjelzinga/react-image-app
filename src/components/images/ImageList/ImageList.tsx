import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { useFetchArray } from "hooks/useFetchArray";
import ImageCard from "components/images/ImageCard/ImageCard";
import "./ImageList.css";
import { PhotoObject, User, Search, SearchTypeEnum, SearchType } from "types";
import { useSelector } from "react-redux";
import { AppState } from "store/rootReducer";
import { UserCard } from "components/user/UserCard/UserCard";

interface IProps {
  nextPage: () => void;
  listItems: PhotoObject[];
}

export const ImageList: React.FC<IProps> = (props) => {
  const { nextPage, listItems } = props;
  const { type } = useSelector<AppState, Search>((state) => state.form.search);
  console.log(listItems);
  // TODO: get type and render either photos or users

  // if (SearchTypeEnum.PHOTOS === type) {

  // } else {
  // }

  const photos = listItems
    ? listItems.map((photoObj) => (
        <ImageCard key={photoObj.id} image={photoObj} />
      ))
    : [];

  // const selectCard = (type: SearchType, obj: PhotoObject | User) => {
  //   if (SearchTypeEnum.PHOTOS === type) {
  //     return <UserCard user={obj} />;
  //   } else {
  //   }
  // };

  return (
    <InfiniteScroll
      className="image-list"
      next={nextPage}
      hasMore={true}
      loader={<h4>Loading.....</h4>}
      dataLength={listItems.length}
    >
      {/* {photos} */}
    </InfiniteScroll>
  );
};
