import { createAction } from "redux-actions";

export const getCart = createAction("GET_CART");
export const createCartLocaly = createAction("CREATE_CART_LOCALY");
export const statusUnset = createAction("CART_UNSET");
