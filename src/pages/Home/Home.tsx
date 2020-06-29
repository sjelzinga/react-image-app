import React, { useState } from "react";
import { useSelector } from "react-redux";

import { SearchForm } from "components/form/SearchForm/SearchForm";
import { ImageList } from "components/images/ImageList/ImageList";
import { useFetchArray } from "hooks/useFetchArray";
import { useSearch } from "hooks/useSearch";
import { AppState } from "store/rootReducer";
import { Search } from "types";

export const Home = () => {
  const [page, setPage] = useState<number>(1);
  // const [query, setQuery] = useState<string>("nature");
  const { query, type } = useSelector<AppState, Search>(
    (state) => state.form.search
  );
  const { data } = useSearch(`/search/${type}`, page, { query });

  return (
    <div>
      <SearchForm />
      <ImageList
        nextPage={() => setPage((prev) => prev + 1)}
        listItems={data}
      />
    </div>
  );
};
