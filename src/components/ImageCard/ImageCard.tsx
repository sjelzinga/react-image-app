import React, { createRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { PhotoObject } from "../../types";
import "./ImageCard.css";

interface IProps {
  image: PhotoObject;
}

export const ImageCard: React.FC<IProps> = ({ image }) => {
  const { name, profile_image } = image.user;
  return (
    <div className="image-card">
      <div className="image-card-header">
        <div className="user-profile-photo">
          <img src={profile_image.small} alt="user" />
        </div>
        <div className="username">{name}</div>
      </div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="image"
      />
      <div className="image-card-footer">
        <div className="likes">
          <FontAwesomeIcon icon={faHeart} />
          <span className="num-likes">{image.likes}</span>
        </div>
        <div className="comments">2443 comments</div>
      </div>
    </div>
  );
};
