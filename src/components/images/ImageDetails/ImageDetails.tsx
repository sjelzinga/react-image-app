import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { axiosClient } from "services/UnsplashAPI";
import { AxiosResponse } from "axios";
import { PhotoObject } from "types";

import "./ImageDetails.css";

interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {}

export const ImageDetails: React.FC<IProps> = ({ match }) => {
  const [image, setImage] = useState<PhotoObject>();

  useEffect(() => {
    window.scrollTo(0, 0);
    axiosClient
      .get(`/photos/${match.params.id}`)
      .then((res: AxiosResponse<PhotoObject>) => setImage(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="image-details">
      <img src={image?.urls.regular} alt="" className="image" />
    </div>
  );
};
