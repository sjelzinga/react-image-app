import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchForm.css";
import { SearchInput } from "../SearchInput/SearchInput";
import { setFormData } from "store/form/formActions";
import { AppState } from "store/rootReducer";
import { Search, SearchTypeEnum, SearchType } from "types";
import { couldStartTrivia } from "typescript";

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
  const [type, setType] = useState<SearchTypeEnum>(SearchTypeEnum.PHOTOS);

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

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    switch (value) {
      case SearchTypeEnum.PHOTOS:
        setType(value);
        break;
      case SearchTypeEnum.USERS:
        setType(value);
        break;
    }
  };

  // console.log(type);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFormData({ query: value, type }));
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
        <select name="type" id="type" onChange={onSelect}>
          <option value={SearchTypeEnum.PHOTOS}>{SearchTypeEnum.PHOTOS}</option>
          <option value={SearchTypeEnum.USERS}>{SearchTypeEnum.USERS}</option>
        </select>
      </form>
    </div>
  );
};
