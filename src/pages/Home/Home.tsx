import React, { useState } from "react";
import { SearchForm } from "components/form/SearchForm/SearchForm";
import { ImageList } from "components/images/ImageList/ImageList";
import { useFetchArray } from "hooks/useFetchArray";
import { useSearch } from "hooks/useSearch";

export const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("nature");
  const { data } = useSearch("/search/photos", page, query);

  const onSubmit = (query: string) => {
    setQuery(query);
  };

  if (!data) {
    return <div>data not found</div>;
  }

  return (
    <div>
      <SearchForm submit={onSubmit} />
      <ImageList
        nextPage={() => setPage((prev) => prev + 1)}
        listItems={data}
      />
    </div>
  );
};
