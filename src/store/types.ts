import { Action } from "redux";

export interface IAction<T> extends Action<ActionType> {
  payload: T;
}

export enum ActionType {
  SET_FORM_DATA,
}
