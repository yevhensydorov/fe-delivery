import { cartReducer } from "./reducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cart: cartReducer,
});
