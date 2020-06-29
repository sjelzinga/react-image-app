import React from "react";

import "./Nav.css";

interface IProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Nav: React.FC<IProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <nav className="nav-wrapper">
      <div className="nav">{children}</div>
    </nav>
  );
};
