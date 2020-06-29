/* global cv */
import React, { useEffect, useState, createRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import { axiosClient } from "services/UnsplashAPI";
import { AxiosResponse } from "axios";
import { PhotoObject } from "types";
import { findEdges } from "cv";

import "./ImageDetails.css";

interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {}

export const ImageDetails: React.FC<IProps> = ({ match }) => {
  const [image, setImage] = useState<PhotoObject>();
  const imgRef = createRef<HTMLImageElement>();

  useEffect(() => {
    window.scrollTo(0, 0);
    axiosClient
      .get(`/photos/${match.params.id}`)
      .then((res: AxiosResponse<PhotoObject>) => {
        setImage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!image) {
    return <div>No data</div>;
  }

  const find = () => {
    findEdges(imgRef);
  };

  return (
    <div className="image-details">
      <img ref={imgRef} src={image?.urls.regular} alt="" className="image" />
      <div className="image-info">
        {!image.user ? (
          <div></div>
        ) : (
          <React.Fragment>
            <div className="name"> {image.user.name}</div>
            <div className="created-at">{image.created_at}</div>
            <div className="description">{image.description}</div>
          </React.Fragment>
        )}
      </div>
      <button onClick={find}>Find Edges</button>
      <div className="canvas-wrapper">
        <canvas id="output" className="image-canvas" />
      </div>
    </div>
  );
};
