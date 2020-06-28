import React, { useState } from "react";
import "./SearchForm.css";
import { SearchInput } from "../SearchInput/SearchInput";

interface IProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  submit: (query: string) => void;
}

export const SearchForm: React.FC<IProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const [hasValue, setHasValue] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setHasValue(true);
  };

  const clear = () => {
    setValue("");
    setHasValue(false);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(value);
    // setValue("");
  };

  const { submit, ...rest } = props;
  return (
    <div className="search-form">
      <form onSubmit={onFormSubmit}>
        <SearchInput
          onChange={onChange}
          value={value}
          clearField={clear}
          fieldHasValue={hasValue}
        />
      </form>
    </div>
  );
};
