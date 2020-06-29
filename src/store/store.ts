import { createStore, compose } from "redux";

import rootReducer from "store/rootReducer";

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers());
