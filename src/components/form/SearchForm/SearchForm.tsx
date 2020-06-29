import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchForm.css";
import { SearchInput } from "../SearchInput/SearchInput";
import { setFormData } from "store/form/formActions";
import { AppState } from "store/rootReducer";
import { Search } from "types";

interface IProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  submit?: (query: string) => void;
}

export const SearchForm: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const { query } = useSelector<AppState, Search>((state) => state.form.search);
  const [value, setValue] = useState<string>("");
  const [hasValue, setHasValue] = useState<boolean>(false);

  useEffect(() => {
    if (query.length > 0) {
      setValue(query);
      setHasValue(true);
    }
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setHasValue(true);
  };

  const clear = () => {
    setValue("");
    dispatch(setFormData({ query: "" }));
    setHasValue(false);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFormData({ query: value, type: "photos" }));
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
