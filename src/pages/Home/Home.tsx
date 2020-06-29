import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./Home.css";
import { SearchForm } from "components/form/SearchForm/SearchForm";
import { ImageList } from "components/images/ImageList/ImageList";
import { useSearch } from "hooks/useSearch";
import { AppState } from "store/rootReducer";
import { Search } from "types";
import { Nav } from "components/layout/Nav/Nav";

export const Home = () => {
  const [page, setPage] = useState<number>(1);
  const { query, type } = useSelector<AppState, Search>(
    (state) => state.form.search
  );
  const { data } = useSearch(`/search/${type}`, page, { query });

  // TODO: rename ImageList to List add prop type to select what kind of list type needs to be created
  return (
    <div className="home">
      <Nav>
        <div className="logo">Unsplash</div>
        <SearchForm />
      </Nav>
      <ImageList
        nextPage={() => setPage((prev) => prev + 1)}
        listItems={data}
      />
    </div>
  );
};
