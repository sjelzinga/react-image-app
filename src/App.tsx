import React from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { PhotoObject } from "./types";
import { ImageCard } from "./components/ImageCard/ImageCard";

function App() {
  const { loading, data, error } = useFetch<PhotoObject[]>("/photos", {
    page: 9,
  });

  const photos = data && data.map((photoObj) => <ImageCard image={photoObj} />);

  return (
    <div className="App">
      <div className="image-list">{photos}</div>
    </div>
  );
}

export default App;
