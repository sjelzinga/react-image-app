import { Search } from "types";
import { ActionType, IAction } from "store/types";

interface State {
  search: Search;
}

const initialState: State = {
  search: {
    query: "",
    type: "photos",
  },
};

const formReducer = (state = initialState, action: IAction<Search>) => {
  switch (action.type) {
    case ActionType.SET_FORM_DATA:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default formReducer;
