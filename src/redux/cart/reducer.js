import { handleActions } from "redux-actions";
import {
	getCart,
  statusUnset,
  createCartLocaly
} from "./action";

const DEFAULT_STATE = {
  newAction: [],
  status: ""
};

const handlers = {
	[getCart]: state => ({ ...state, status: "PENDING" }),
  [createCartLocaly]: (state, action) => {
    let finalAction = [];
    if (state.newAction !== undefined) {
      finalAction = [...state.newAction, action.payload];
    } else {
      finalAction = [action.payload];
    }
    return { ...state, newAction: finalAction };
  },

  [statusUnset]: state => {
    return { ...state, status: "" };
  }
};

export default handleActions(handlers, DEFAULT_STATE);
