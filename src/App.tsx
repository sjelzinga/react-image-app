import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ImageDetails } from "components/images/ImageDetails/ImageDetails";
import { Home } from "pages/Home/Home";

export const paths = {
  home: "/",
  image: "/images",
};

function App() {
  return (
    <Router>
      <Route exact path={paths.home} component={Home} />
      <Route exact path={`${paths.image}/:id`} component={ImageDetails} />
    </Router>
  );
}

export default App;
