import { ActionType, IAction } from "store/types";
import { Search } from "types";

export const setFormData = (data: Search): IAction<Search> => ({
  type: ActionType.SET_FORM_DATA,
  payload: data,
});
