import { combineReducers } from "redux";
import formReducer from "./form/formReducer";

const rootReducer = combineReducers({
  form: formReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
