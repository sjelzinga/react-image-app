import React, { useState } from "react";
import { SearchForm } from "components/form/SearchForm/SearchForm";

export const Home = () => {
  const [page, setPage] = useState<number>(2);
  const [query, setQuery] = useState<string>();
  // const { data, error } = useFetchArray("/photos", page, true, {
  //   per_page: 10,
  // });

  const onSubmit = (query: string) => {
    console.log(query);
    setQuery(query);
  };

  return (
    <div>
      <SearchForm submit={onSubmit} />
    </div>
  );
};
