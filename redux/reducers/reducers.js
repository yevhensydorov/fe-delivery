import { ADD_ITEM_TO_BASKET } from "../actions";

import { menu } from "../../constants/menu";

const cartInitState = {
  addedItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export function cartReducer(state = cartInitState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_BASKET:
      let newState;
      let itemToAdd = menu.find((el) => el.id === action.id);
      let existedItem = state.addedItems.find((el) => el.id === action.id);

      if (existedItem) {
        itemToAdd.quantity += 1;
        newState = Object.assign({}, state, {
          totalQuantity: (state.totalQuantity += 1),
          totalPrice: (state.totalPrice += itemToAdd.price),
        });
      } else {
        itemToAdd.quantity = 1;
        newState = Object.assign({}, state, {
          addedItems: [...state.addedItems, itemToAdd],
          totalQuantity: (state.totalQuantity += 1),
          totalPrice: (state.totalPrice += itemToAdd.price),
        });
      }

      return newState;
    default:
      return state;
  }
}
