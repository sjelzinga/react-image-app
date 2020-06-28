import React, { useState, createRef, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as SearchIcon } from "assets/svgs/Search.svg";
import "./SearchInput.css";

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  clearField: () => void;
  fieldHasValue: boolean;
}

export const SearchInput: React.FC<IProps> = (props) => {
  const { clearField, fieldHasValue, ...rest } = props;
  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    console.log(inputRef.current.value, "value");
  });

  return (
    <div className="search-input">
      <SearchIcon className="search-icon" />
      <input
        ref={inputRef}
        {...rest}
        className="input-style"
        placeholder="Search"
      />
      <button type="button" onClick={clearField} className="clear-input-btn">
        {fieldHasValue && <span>&times;</span>}
      </button>
    </div>
  );
};
