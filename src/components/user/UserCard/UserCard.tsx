import React from "react";
import { User } from "types";

interface IProps {
  user: User;
}

export const UserCard: React.FC<IProps> = ({ user }) => {
  return (
    <div>
      <img src="" alt="" />
      <div className="name"></div>
    </div>
  );
};
