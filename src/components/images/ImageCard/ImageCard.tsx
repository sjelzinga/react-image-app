import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { PhotoObject } from "types";
import "./ImageCard.css";
import { useHistory } from "react-router-dom";
import { paths } from "App";

interface IProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  image: PhotoObject;
}

const ImageCard: React.FC<IProps> = ({ image }) => {
  const { name, profile_image } = image.user;

  const history = useHistory();

  const showImageDetails = () => {
    history.push(`${paths.image}/${image.id}`);
  };

  return (
    <div className="image-card" onClick={showImageDetails}>
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

export default ImageCard;
