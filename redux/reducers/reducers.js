import { ADD_ITEM_TO_BASKET, REMOVE_ITEM_FROM_BASKET } from "../actions";

import { menu } from "../../constants/menu";

const cartInitState = {
  addedItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export function cartReducer(state = cartInitState, action) {
  let newState;

  switch (action.type) {
    case ADD_ITEM_TO_BASKET:
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
    case REMOVE_ITEM_FROM_BASKET:
      let itemToFind = state.addedItems.find((el) => el.id === action.id);

      if (itemToFind.quantity > 1) {
        itemToFind.quantity -= 1;
        newState = Object.assign({}, state, {
          totalQuantity: (state.totalQuantity -= 1),
          totalPrice: (state.totalPrice -= itemToFind.price),
        });
      } else {
        const filteredState = state.addedItems.filter(
          (el) => el.id !== action.id
        );
        newState = Object.assign({}, state, {
          addedItems: filteredState,
          totalQuantity: (state.totalQuantity -= 1),
          totalPrice: (state.totalPrice -= itemToFind.price),
        });
      }

      return newState;
    default:
      return state;
  }
}
